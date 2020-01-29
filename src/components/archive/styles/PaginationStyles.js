import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  .actualPage {
    display: block;
    background: #aaa;
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    padding: 3px 0 0 0;
  }

  h3{
    font-size: 14px;
    font-weight: 400;
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    display: block;
    color: #000;
    padding: 8px 0px 10px 0px;
    margin-bottom: 30px;
    text-align: right;   

  }
  .navBack {
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: #000;
    position: relative;
    width: 120px;
    height: 30px;
    display: block;
    padding: 3px 10px 0 25px;
    margin-bottom: 30px;

    :before {
      display: block;
      position: absolute;
      left: -15px;
      top: 50%;
      margin: 0;
      border: solid;
      content: '';
      pointer-events: none;
      border-right-color: #aaa;
      border-top-color: #fff;
      border-bottom-color: #fff;
      border-left-color: #fff;
      border-width: 10px;
      margin-top: -8px;
    }

    :hover {
      border-right-color: #d22e26;
      border-top-color: #fff;
      border-bottom-color: #fff;
      border-left-color: #fff;
      border-width: 15px;
 
 
    }

    :hover:before {
      border-right-color: #d22e26;
    }
  }

  .navForward {
    font-family: 'Teko', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 800;
    color: #000;
    position: relative;
    width: 120px;
    height: 30px;
    display: block;
   padding: 3px 10px 0 20px;
    margin-bottom: 30px;
    text-align: center;

    :after {
      display: block;
      position: absolute;
      left: 90%;
      top: 50%;
      margin: 0;
      border: solid;
      content: '';
      pointer-events: none;
      border-right-color: #fff;
      border-top-color: #fff;
      border-bottom-color: #fff;
      border-left-color: #aaa;
      border-width: 10px;
      margin-top: -8px;
    }

    :hover {
      border-right-color: #fff;
      border-top-color: #fff;
      border-bottom-color: #fff;
      border-left-color: #d22e26;
      border-width: 15px;
  
    }

    :hover:after {
      border-left-color: #d22e26;
    }
  }
`;
