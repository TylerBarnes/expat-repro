/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import ArchiveSidebar from '../components/archive/ArchiveSidebar';
import BreadCrumb from '../components/BreadCrumb';
import Pagination from '../components/archive/Pagination';
import PageHero from '../components/PageHero';
import Img from 'gatsby-image';
import './styles/articleStyles.css';

import {
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
  StyledContainer,
  } from './styles/archiveStyles';


const archiveTemplate = ({
  data: { file, allWordpressPost },
  pageContext: {
    catId,
    catName,
    catSlug,
    categories,
    humanPageNumber,
    numberOfPages,
  },
}) => (


<Layout>
    <PageHero img={file.childImageSharp.fluid} />
    <BreadCrumb
      parent={{
        link: '/blogs/all-blogs',
        title: 'Blogs',
      }}
    />
    
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <ArchiveSidebar catId={catId} categories={categories} />
        <PageContent className="col-lg-9">

          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />

         <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWordpressPost.edges.map(post => (
           
          <article key={post.node.id} className="entry-content">
          <StyledContainer><div class="container">
  <div class="column">
    <div class="post-module">
      <div class="thumbnail">
        <div class="date">
          <div class="day">  
          <StyledDate
                dangerouslySetInnerHTML={{
                  __html: post.node.date.replace(/\W+/g, ' '),
                }}
          />
          </div>
        </div>            
        
            {post.node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
            <Img resolutions={post.node.featured_media.localFile.childImageSharp.resolutions} />  
            </div>
            }

      </div>
      <div class="post-content">
        <div class="category"><h3 dangerouslySetInnerHTML={{ __html: catName }} />
      </div>
        <h1 class="title"><Link to={`/blogs/${post.node.slug}/`}>
                <StyledH2
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </Link></h1>
        <div class="description"> <h1 dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /></div>
        <div class="post-meta"><span class="timestamp">
          <StyledReadMore to={`/blogs/${post.node.slug}`}>
                Read More
          </StyledReadMore>
        </span>
        </div>
      </div>
    </div>
  </div>
</div>
</StyledContainer>
          </article>

          ))}

          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />

        </PageContent>
      </div>
    </div>
    
  </Layout>
);


export default archiveTemplate;

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "DD, MMM, YYYY")
          featured_media {
            source_url
            localFile {
              relativePath 
              childImageSharp {
                resolutions(width: 900, height: 500) {
                  ...GatsbyImageSharpResolutions_withWebp
                  src
                  width
                  height
                }
              }
            }
         }
      }
    }
  }
    file(relativePath: { eq: "archive_expat_headerImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
