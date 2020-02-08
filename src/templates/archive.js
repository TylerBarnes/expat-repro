/* eslint-disable react/no-danger */
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/archive/Pagination"
import "./styles/articleStyles.css"

import {
  PageContent,
  StyledH2,
  StyledReadMore,
  StyledContainer,
} from "./styles/archiveStyles"

const archiveTemplate = ({
  data: { file, allWordpressPage },
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
    <div className="container">
      <div className="row" style={{ marginBottom: "40px" }}>
        <PageContent className="col-lg-9">
          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />

          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWordpressPage.edges.map(post => (
            <article key={post.node.id} className="entry-content">
              <StyledContainer>
                <div class="container">
                  <div class="column">
                    <div>
                      <h3 dangerouslySetInnerHTML={{ __html: catName }} />
                    </div>
                    <h1>
                      <Link to={`/blogs/${post.node.slug}/`}>
                        <StyledH2
                          dangerouslySetInnerHTML={{ __html: post.node.title }}
                        />
                      </Link>
                    </h1>
                    <StyledReadMore to={`/blogs/${post.node.slug}`}>
                      Read More
                    </StyledReadMore>
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
)

export default archiveTemplate

export const pageQuery = graphql`
  query(
    # $catId: String!,
    $skip: Int!
    $limit: Int!
  ) {
    allWordpressPage(
      # filter: { categories: { elemMatch: { id: { eq: $catId } } } }
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
`
