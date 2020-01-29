const path = require('path');
const slash = require('slash');
const _ = require('lodash');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/page.js');
  const archiveTemplate = path.resolve('./src/templates/archive.js');
  const postTemplate = path.resolve('./src/templates/post.js');

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
      allWordpressPost(filter: {status: {eq: "publish"}}, sort: {order: DESC, fields: date}, limit: 1000 ) {
        edges {
          node {
            id
            link
            status
            categories {
              id
              name
              slug
            }
            featured_media {
              localFile{
                  childImageSharp {
                      id
                  } 
              }
          }   
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
            count
          }
        }
      }

      allSite {
        edges {
          node {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      }
    site {
       siteMetadata {
         domain: siteUrl
        }
      }  
     }
  `);

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
  } = result.data;

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map"
    });
};
  
const sortByDateDescending = (a, b) => {
  const aPubDateInMS = (new Date(a.date)).getTime();
  const bPubDateInMS = (new Date(b.date)).getTime();

  if (aPubDateInMS > bPubDateInMS) {
    return 1
  }

  if (aPubDateInMS < bPubDateInMS) {
    return -1
  }

  return 0
}

 const getRelatedPosts = (currentPost, posts) => {
  const MINIMUM_CATEGORIES_IN_COMMON = 1

  const hasAtLeastOneCategoryInCommon = ({ node }) => {
    // stop working if we're looking at the same article
    if (currentPost.id === node.id) {
      return false
    }
    const commonCategories = _.intersectionBy(currentPost.categories, node.categories, (category) => category.slug)
    return commonCategories.length >= MINIMUM_CATEGORIES_IN_COMMON
  }

  const filteredResults = posts.filter(hasAtLeastOneCategoryInCommon)
  if (filteredResults.length > 5) {
    return filteredResults.sort(sortByDateDescending).slice(0, 5)
  }
  return filteredResults
}


  // Create archive pages for each category
  allWordpressCategory.edges.forEach(catEdge => {
    // First filter out the posts that belongs to the current category
    const filteredPosts = allWordpressPost.edges.filter(
      ({ node: { categories } }) =>
        categories.some(el => el.id === catEdge.node.id)
    );
    // Some categories may be empty and we don't want to show them
    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 10,
        pathPrefix: 
        catEdge.node.slug === "blogs"
        ? "/blogs"
        : `/blogs/${catEdge.node.slug}`,
        component: slash(archiveTemplate),
        context: {
          catId: catEdge.node.id,
          catName: catEdge.node.name,
          catSlug: catEdge.node.slug,
          catCount: catEdge.node.count,
          categories: allWordpressCategory.edges,
        },
      });
    }
  });

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === 'publish') {
      createPage({
        path: edge.node.link,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      });
    }
  });

  /*const {posts} = result.data.allWordpressPost.edges*/

  _.each(result.data.allWordpressPost.edges, edge =>{
    createPage({
      path: `/blogs${edge.node.link}`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        relatedPosts: getRelatedPosts(edge.node, result.data.allWordpressPost.edges),
      },
    });
  });
};

 /* posts.forEach(({edge},index)=>{*/
/* allWordpressPost.edges.forEach(edge => {
     
      createPage({
        path: `/blogs${edge.node.link}`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
          relatedPosts: getRelatedPosts(edge.node.id, posts),
        },
      });
    
  });

  };*/