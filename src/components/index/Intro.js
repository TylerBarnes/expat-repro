/* eslint-disable react/no-danger */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { IntroWrapper } from './styles/IntroStyles';

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(wordpress_id: { eq: 155432 }) {
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <IntroWrapper>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 introImage"
            style={{
              backgroundImage: `url(${
                data.wordpressPage.featured_media.localFile.childImageSharp
                  .fluid.src
              })`,
            }}
          />
          <div className="col-md-6 introText">
            <div
              dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
            />
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
