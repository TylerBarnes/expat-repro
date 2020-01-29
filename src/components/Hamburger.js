import React from 'react';
import PropTypes from 'prop-types';

import { HamburgerButton } from './styles/HamburgerStyles';
import HamburgerHeart from '../images/ham-menu-ui.svg';

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <img src={HamburgerHeart} alt="expat-guide-turkey-hamburger" />
  </HamburgerButton>
);

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
};

export default Hamburger;