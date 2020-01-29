import styled from 'styled-components';
import { Link } from 'gatsby';

export const PageContent = styled.article`
  margin: 20px 0 0 0;`;


export const StyledContainer = styled.div`
padding: 5px;

@media (min-width: 375px) {
  width: 340px;
}

@media screen and (max-width: 375px) {
  /* max-width: 100%; */
  width: 340px;
}

@media screen and (min-width: 768px) {
  /* max-width: 100%; */
  width: 700px;
  margin-right: 50px;
}
`;  

export const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 80px 0 0 0;
  text-transform: capitalize;
  :hover {
    color: #d22e26;
  }
  `;

export const StyledDate = styled.div`
  font-family: 'Raleway';
  font-size: 1.1rem;
  font-weight: 600;
`;

export const StyledReadMore = styled(Link)`
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  position: relative;
  width: 110px;
  height: 35px;
  display: block;
  background: #000;
  padding: 3px 0 0 8px;
    
  :after {
    left: 100%;
    top: 100%;
    border-bottom: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: relative;
    pointer-events: none;
    border-bottom-color: #000;
    border-width: 15px;
    margin-top: -15px;
  }

  :hover {
    background: #d22e26;
  }

  :hover:after {
    border-left-color: #d22e26;
  }

`;