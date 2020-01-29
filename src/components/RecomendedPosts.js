/* eslint-disable react/no-danger */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import '../templates/styles/articleStyles.css';

const RecomendedPosts = () => {
    
    const data = useStaticQuery(graphql`
    query {
        allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "General"}}}}, sort: { fields: [date], order: DESC }) {
          edges {
            node {
              title
              excerpt
              slug
              categories {
                id
                name
                slug
              }
              featured_media {
                source_url
                localFile {
                  relativePath 
                  childImageSharp {
                    resolutions(width: 350, height: 200) {
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
      }
    `);
  
    return (
       <div className="container">
        
          <div className="row" style={{ paddingBottom: '40px' }}>
          
    <div class="post-module-2">
      <div class="thumbnail-2">
            <div className="col-sm-4 pl-sm-1"  >
            
              {data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
            <Link to={`/blogs/${data.allWordpressPost.edges[0].node.slug}/`} style={{ paddingTop: '50px' }} >
            <Img resolutions={data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.resolutions} style={{ paddingRight: '40px' }}/>  
            </Link>
            </div>
            }
        

              <Link to={`/blogs/${data.allWordpressPost.edges[0].node.slug}/`} >
              <b class="title-2">{data.allWordpressPost.edges[0].node.title}</b>
              </Link>
              </div>
            </div> 
            <div class="description-2"><h4>{data.allWordpressPost.edges[0].node.excerpt}</h4></div>  
            </div>
            
            <div class="post-module-2">
      <div class="thumbnail-2"> 
            <div className="col-sm-4 pl-sm-2" >
            {data.allWordpressPost.edges[11].node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
            <Link to={`/blogs/${data.allWordpressPost.edges[11].node.slug}/`}>
            <Img resolutions={data.allWordpressPost.edges[11].node.featured_media.localFile.childImageSharp.resolutions} />  
            </Link>
            </div>
            }
              <Link to={`/blogs/${data.allWordpressPost.edges[11].node.slug}/`}>
              <b class="title-2">{data.allWordpressPost.edges[11].node.title}</b>
              </Link>
            </div>
            </div> 
            <div class="description-2"><h4>{data.allWordpressPost.edges[11].node.excerpt}</h4></div>  
            </div>

            <div class="post-module-2">
        <div class="thumbnail-2"> 
            <div className="col-sm-4 pr-sm-2" >
            {data.allWordpressPost.edges[2].node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
            <Link to={`/blogs/${data.allWordpressPost.edges[2].node.slug}/`}>
            <Img resolutions={data.allWordpressPost.edges[2].node.featured_media.localFile.childImageSharp.resolutions} />  
            </Link>
            </div>
            }
              <Link to={`/blogs/${data.allWordpressPost.edges[2].node.slug}/`}>
              <b class="title-2">{data.allWordpressPost.edges[2].node.title}</b>
              </Link>
            </div>
          </div>
          <div class="description-2"><h4>{data.allWordpressPost.edges[2].node.excerpt}</h4></div>  
          </div> 
            </div>
            
          <div className="row">
          <div class="post-module-2">
        <div class="thumbnail-2"> 
            <div className="col-sm-4 pl-sm-1"  >
            
              {data.allWordpressPost.edges[8].node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
            <Link to={`/blogs/${data.allWordpressPost.edges[8].node.slug}/`}  >
            <Img resolutions={data.allWordpressPost.edges[8].node.featured_media.localFile.childImageSharp.resolutions} />  
            </Link>
            </div>
            }
        

            <Link to={`/blogs/${data.allWordpressPost.edges[8].node.slug}/`}  >
              <b class="title-2">{data.allWordpressPost.edges[8].node.title}</b>
              </Link>
              </div>
              </div> 
              <div class="description-2"><h4>{data.allWordpressPost.edges[8].node.excerpt}</h4></div>  
            </div>

            <div class="post-module-2">
        <div class="thumbnail-2"> 
            <div className="col-sm-4 pl-sm-2" >
            {data.allWordpressPost.edges[5].node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
           <Link to={`/blogs/${data.allWordpressPost.edges[5].node.slug}/`}>
            <Img resolutions={data.allWordpressPost.edges[5].node.featured_media.localFile.childImageSharp.resolutions} />  
            </Link> 
            </div>
            }
              <Link to={`/blogs/${data.allWordpressPost.edges[5].node.slug}/`}>
              <b class="title-2">{data.allWordpressPost.edges[5].node.title}</b>
              </Link>
            </div>

            </div> 
            <div class="description-2"><h4>{data.allWordpressPost.edges[5].node.excerpt}</h4></div>  
            </div>
            <div class="post-module-2">
        <div class="thumbnail-2"> 
            <div className="col-sm-4 pr-sm-2" >
            {data.allWordpressPost.edges[6].node.featured_media.localFile.childImageSharp.resolutions  != null &&  
            <div>
            <Link to={`/blogs/${data.allWordpressPost.edges[6].node.slug}/`}>
                <Img resolutions={data.allWordpressPost.edges[6].node.featured_media.localFile.childImageSharp.resolutions} />  
                </Link>
                </div>
            }
              <Link to={`/blogs/${data.allWordpressPost.edges[6].node.slug}/`}>
              <b class="title-2">{data.allWordpressPost.edges[6].node.title}</b>
              </Link>
            </div>
            </div> 
            <div class="description-2"><h4>{data.allWordpressPost.edges[6].node.excerpt}</h4></div>  
            </div>
          </div>

        </div>
      );
  };
  
  export default RecomendedPosts;