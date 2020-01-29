/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';
import '../templates/styles/articleStyles.css';


const RecomendedPosts = ({
  data: { posts  },
  pageContext: {
    catId,
  },
}) => (
    
       <div className="container">
          <div className="row" style={{ paddingBottom: '40px' }}>
            <div className="col-sm-4 pl-sm-1" style={{ paddingRight: '40px' }} >
              <Link to={`/blogs/${posts.edges[0].node.slug}/`} style={{ paddingTop: '50px' }} >
              <b>{posts.edges[0].node.title}</b>
              </Link>
              </div>
              
            <div className="col-sm-4 pl-sm-2" style={{ paddingLeft: '40px' }}>
              <Link to={`/blogs/${posts.edges[11].node.slug}/`}>
              <b>{posts.edges[11].node.title}</b>
              </Link>
            </div>
            <div className="col-sm-4 pr-sm-2" style={{ paddingRight: '40px' }}>
              <Link to={`/blogs/${posts.edges[2].node.slug}/`}>
              <b>{posts.edges[2].node.title}</b>
              </Link>
            </div>
         
          </div>

          <div className="row">
            <div className="col-sm-4 pl-sm-1" style={{ paddingRight: '40px' }} >
            
             <Link to={`/blogs/${posts.edges[8].node.slug}/`}  >
              <b>{posts.edges[8].node.title}</b>
              </Link>
              </div>
              
            <div className="col-sm-4 pl-sm-2" style={{ paddingRight: '40px' }}>
              <Link to={`/blogs/${posts.edges[5].node.slug}/`}>
              <b>{posts.edges[5].node.title}</b>
              </Link>
            </div>
            <div className="col-sm-4 pr-sm-2" style={{ paddingRight: '40px' }}>
              <Link to={`/blogs/${posts.edges[6].node.slug}/`}>
              <b>{posts.edges[6].node.title}</b>
              </Link>
            </div>
         
          </div>

        </div>
      );
  export default RecomendedPosts;


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
             }
    }
  }
  }
`;