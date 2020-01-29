import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImg = styled(Img)`
  img {
    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
    z-index: 1;
    max-height: 100px;
       
    @media (min-width: 768px) {
      max-height: 300px;
    }
  }
`;

export const CTAImage = styled.div`
  margin-bottom: 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  :hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
    }

div:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      bottom: -9px;
      left: 0px;
      background: #d22e26;
      visibility: hidden;
      border-radius: 0px;
      transform: scaleX(0);
      transition: .25s linear;
    }

div:hover:before,
div:focus:before {
      visibility: visible;
      transform: scaleX(1);
    }

  max-height: 100px;
  @media (min-width: 768px) {
    max-height: 300px;
  }
`;

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0px;
  width: calc(100% - 30px);
  height: calc(100% - 15px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #41373773;
`;

export const CTAImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: 'Raleway';
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
