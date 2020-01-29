/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

//import { IntroWrapper } from '../components/index/styles/IntroStyles';
import Layout from '../components/layout';
import BreadCrumb from '../components/BreadCrumb';
import PageHero from '../components/PageHero';
import PageTransition from 'gatsby-plugin-page-transitions';
import './styles/chart.css';
import './styles/fontawesome.css';
import './styles/animate.css';
import './styles/circle.css';

const PageContent = styled.article`
  margin: 20px 0 0 0;
`;

const PageTemplate = ({ data }) => (
<PageTransition>
<Layout>
    {data.currentPage.featured_media ? (
      <PageHero
        img={data.currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null}
    <BreadCrumb parent={data.parent} />
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
            
         <PageContent className="col-lg-12">
         
         <div className="col-md-8"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="20s"
          data-sal-easing="ease">
         <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
         </div> 
         <div  dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
         
         </PageContent>
      </div>
    </div>
  </Layout>
  </PageTransition>  
  );

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!, $parent: Int!, $wpId: Int!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      
      wordpress_parent
      
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      acf {
        section_1_heading
        section_2_heading
        section_3_heading
        section_1_text
        section_2_text
        section_3_text
      
        section_1_image {
          ...ctaImage
        }
        section_2_image {
          ...ctaImage
        }
       }

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
