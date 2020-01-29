import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';

import Footer from './Footer';

import './layout.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

const Primary = styled.main`
  padding: 110px 0 0 0;
`;
const Layout = ({ children }) => {

  return (
    <>
     
      <Header />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
      <Footer />
      
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;