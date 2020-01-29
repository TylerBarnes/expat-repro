/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SEO from '../components/seo';

import Layout from '../components/layout';
import Breadcrumb from '../components/BreadCrumb';
import PostSidebar from '../components/post/PostSidebar';
import PageHero from '../components/PageHero';
import PageTransition from 'gatsby-plugin-page-transitions';

import ShareButtons from "../components/ShareButtons";
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

import RecomendedPosts from '../components/RecomendedPosts';


/*import commentBox from 'commentbox.io';*/
/*commentBox('5691466835820544-proj');*/


const PostContent = styled.article`
  margin: 20px 0 0 0;
`;


/*const postTemplate = ({ data: { post }, relatedPosts }) => {*/

 /* const {next,prev} = pageContext*/

 

 class postTemplate extends React.Component{

  render(){
 
 const post = this.props.data.post
 
/* const { relatedPosts } = this.props.pageContext*/
 
 return(  
  
<PageTransition>
<Layout>
<SEO title={post.title} description={post.excerpt} keywords={['expat', 'guide', 'turkey']} />
    <PageHero img={post.featured_media.localFile.childImageSharp.fluid} />
    
<Breadcrumb
      parent={{
        link: '/blogs/all-blogs',
        title: 'blogs',
      }}
    />
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <PostSidebar
          date={post.date}
          author={post.author.name}
          categories={post.categories}
        />
        <PostContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <ShareButtons/>
        
        <div className="col-lg-12"> <TalkyardCommentsIframe /></div>
       
        
        
        </PostContent>
        <h2 className="section-title separator-below"> Related Post - </h2><p> Here are a couple of related posts you might enjoy reading.</p>
        <RecomendedPosts name={post.categories} />
        </div>
    </div>
   
    </Layout>
  </PageTransition>
) 
}
 }
/*postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};*/

export default postTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      id 
      title
      content
      excerpt
      slug
      author {
        name
      }
      date(formatString: "DD, MMM, YYYY")
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
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            src
            }
          }
        }
      }
    }
    }
  `;