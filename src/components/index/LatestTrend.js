/* eslint-disable react/no-danger */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const LatestTrendWrapper = styled.div`
  text-align: center;
  margin: 40px 0;
`;

const LatestTrend = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
  `);

  return (
    <LatestTrendWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Latest Post</h1>
            <h4>{data.allWordpressPost.edges[0].node.title}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data.allWordpressPost.edges[0].node.excerpt,
              }}
            />
            <Link to={`/blogs/${data.allWordpressPost.edges[0].node.slug}/`}>
              <h5>Read More</h5>
            </Link>
          </div>
        </div>
      </div>
    </LatestTrendWrapper>
  );
};

export default LatestTrend;
