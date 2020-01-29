import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  margin: 40px 0 0 0;

  @media (min-width: 992px) {
    margin: 125px 0 0 0;
  }
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  margin: 0;

  .count {
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 0.8rem;
    background: #aaa;
    color: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    width: 35px;
    height: 22px;
    display: block;
    text-align: center;
    vertical-align: middle;
    float: left;
  }

  .sidebar-menu-header {
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
    text-transform: uppercase;
  }

  li {
    margin: 0 0 5px 0px;
    color: #000;
    font-family: 'Teko', Arial;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;

    a:hover {
      color: #000000;
    
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
    float: left;
    padding: 0 10px 0 0;
    width: 38px;
    height: auto;
  }

`;
