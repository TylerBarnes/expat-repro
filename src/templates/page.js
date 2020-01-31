/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const PageContent = styled.article`
  margin: 20px 0 0 0;
`;

const PageTemplate = ({ data }) => (
<Layout>
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
            
         <PageContent className="col-lg-12">
         
         <div className="col-md-8">
         <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
         </div> 
         <div  dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
         
         </PageContent>

      </div>
    </div>
  </Layout>

  );

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!, $parent: Int!, $wpId: Int!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      slug
      content
      wordpress_parent
      
         
    }
    parentChildren: allWordpressPage(
      filter: { wordpress_parent: { eq: $parent } }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
  
    
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
    }
  }
`;
