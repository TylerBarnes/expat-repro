import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 9999;
  background: #fff;
  left: 0px;
  padding: 10px;
  transition: all 0.3s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 30px;

    .whiteLogo {
      max-width: 200px;
      margin: 20px 0 30px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 10px 0;
      }

      li.overlayActive {
        color: #d22e26;
      }

      li:before {
        content: '';
      }
       
      a {
        font-family: 'Teko', Arial, Helvetica, sans-serif;
        font-size: 2rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;
        line-height: 1.1em;

        :hover {
          color: #d22e26;
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;

    :hover {
      transform: rotate(180deg);
    }
  }
`;
