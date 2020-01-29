import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Navigation from './Navigation';

import tangoLogo from '../images/expat-guide-turkey-logo.svg';
import { HeaderWrapper } from './styles/HeaderStyles';

const Header = () => {
  const {
    site,
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 85 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              wordpress_children {
                title
                url
              }
       
            }
            name
          }
        }
      }
    }
  `);

  return (
    <HeaderWrapper>
      <div className="container-fluid">
        <div className="row">
         <div className="col-md-2">
         <Link to="/">
              <img src={tangoLogo} alt={site.siteMetadata.title} />
            </Link>
          </div>
          
          <div className="col-md-10 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;