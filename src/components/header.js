import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navigation from './Navigation';

import { HeaderWrapper } from './styles/HeaderStyles';

const Header = () => {
  const {
    
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