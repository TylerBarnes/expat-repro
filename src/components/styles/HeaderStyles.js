import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #fff;
  margin-bottom: 1.45rem;
  height: 110px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  -webkit-box-shadow: 0 5px 4px -6px #999;
    -moz-box-shadow: 0 5px 4px -6px #999;
    box-shadow: 0 7px 4px -8px #999;
 

    @media (min-width: 1200px) {
    img {
        margin:170px!important;
      }
    }

  img {
    max-width: 185px;
    margin: 0;
    padding: 12px 0 0 0;
  }

  .menu {
    display: flex;
    align-items: center;
  }
`;

