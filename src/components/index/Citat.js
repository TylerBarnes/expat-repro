import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import citatimg from '../../images/tango_citat.svg';
import { CitatWrapper } from './styles/CitatStyles';

const Citat = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(wordpress_id: { eq: 152044 }) {
        acf {
          citat_1_text
          citat_1_author
        }
      }
    }
  `);

  return (
    <CitatWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={citatimg} alt="quote" />
            <h6>{data.wordpressPage.acf.citat_1_text}</h6>
            {data.wordpressPage.acf.citat_1_author}
          </div>
        </div>
      </div>
    </CitatWrapper>
  );
};

export default Citat;
