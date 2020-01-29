import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled(Img)`
  height: 300px;
`;

const PageHero = ({ img }) => (
  <div className="containter">
    <div className="row">
      <div className="col-md-12" style={{ padding: 0 }}>
        <StyledImg fluid={img} />
      </div>
    </div>
  </div>
);

PageHero.propTypes = {
  img: PropTypes.object,
};

PageHero.defaultProps = {
  img: './images/archive_expat_headerImage.jpg',
};

export default PageHero;
