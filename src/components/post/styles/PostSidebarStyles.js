import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  margin: 40px 0 0 0;

  @media (min-width: 992px) {
    margin: 10px 0 0 0;
  }
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-menu-header {
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    border-bottom: 1px #e4e4e4 solid;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
  }

  li {
    margin: 0 0 5px 0px;
    color: #000;
    font-family: 'Raleway', Arial;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;

    a:hover {
      color: #d22e26;
    }
  }
  
li:before {
    content: '';
  }
  .sidebar-highlighted {
    color: #d22e26;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }

  img {
    left: 0;
    position: absolute;
    padding: 0 10px 0 0;
    width: 28px;
    height: auto;
    margin: 0 0 0 15px;
  }

  span {
    margin: 0 0 0 40px;
  }
`;
