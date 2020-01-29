import styled from 'styled-components';

export const BreadCrumbWrapper = styled.div`
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 1rem;
  margin: 40px 0 0 0;
  padding: 0;

  .divider {
    margin: 0 10px 0 10px;
  }

  span:hover {
    color: #d22e26;
  }

  a {
    text-decoration: none;
    color:#d22e;
  }
  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: none;
   }
`;
