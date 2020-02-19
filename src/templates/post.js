/* eslint-disable react/no-danger */
import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"

import RecomendedPosts from "../components/RecomendedPosts"

const PostContent = styled.article`
  margin: 20px 0 0 0;
`

class postTemplate extends React.Component {
  render() {
    const post = this.props.data.post

    console.log(this.props)

    return (
      <Layout>
        <SEO
          title={post.title}
          description={post.excerpt}
          keywords={["expat", "guide", "turkey"]}
        />
        <div className="container">
          <div className="row" style={{ marginBottom: "40px" }}>
            <PostContent className="col-lg-9">
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </PostContent>
            <h2 className="section-title separator-below"> Related Post - </h2>
            <p> Here are a couple of related posts you might enjoy reading.</p>
            <RecomendedPosts />
          </div>
        </div>
      </Layout>
    )
  }
}
/*postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};*/

export default postTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      slug
      # author {
      #   name
      # }
      date(formatString: "DD, MMM, YYYY")
      # categories {
      #   id
      #   name
      #   slug
      # }
    }
  }
`
