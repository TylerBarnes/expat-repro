import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #f3f3f3;
  color: #4c4c4c;
  text-align: left;
  padding: 40px 0 10px 0;

  h1 {
    font-family: 'Raleway', Arial;
    color: #4c4c4c;
    text-align: left;
    font-size: 25px;
    margin-left: 0px;
  }

  h3 {
    font-family: 'Raleway', Arial;
    font-size: 16px;
    margin-top: 5px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 0.9rem;
  }


  h6 {
    font-family: 'Times New Roman';
    font-size: 28px;
    color: #fff;
    font-style: italic;
    margin: 40px 20% 20px 20%;
    line-height: 35px;
  }
  
  h6:before{
    content: "";
    background: #d22e;
    width: 40px;
    height: 4px;
    position: absolute;
    bottom: 10px;
  }


  a {
    text-decoration: none;
    color: #d22e;
    font-weight: 200;
    font-family: Arial, Helvetica, sans-serif;
  }

  .icon_social {
    text-decoration: none;
    display: inline-block;
    margin: 0.6rem 1.2rem 1rem 0;
    opacity: 0.5;
    width: 1.4rem;
    height: 1.4rem;
  }

  .social {
    text-align: left;
    display: block;
    margin: 5px 0px; 
  }

  .social img {
    width: 1.2rem;
    height: auto;
    margin: 0 5px 0 0;
    position: relative;
    align-items: left;
    opacity: 0.5;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    filter: invert(60%) sepia(33%) saturate(2000%) hue-rotate(322deg) brightness(100%) contrast(120%);
  }

  .expat-contact {
    font-size: 12px;
    font-weight: 400;
    font-family: Raleway, Arial;
    line-height: 1.2rem;
  }

  .expat-heading {
  
    font-size: 25px;
    font-family: Raleway, Arial;
    line-height: 1rem;
    text-align: left;
    display: -webkit-flex; /* Safari */
    -webkit-align-items: center; /* Safari 7.0+ */
    display: flex;
      
     }

.expat-heading:before{
  content: "";
  background: #d22e;
  width: 40px;
  height: 4px;
  position: absolute;
  bottom: 6px;
}

  .social img:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  .linkedin {
    margin-right: 5px;
    filter: invert(36%) sepia(73%) saturate(2157%) hue-rotate(344deg) brightness(77%) contrast(99%);
  -webkit-filter:invert(60%);
    }

  .facebook {
    margin-left: 5px;
    filter: invert(60%); 
  -webkit-filter:invert(60%);
  }
  
  .instagram {
    margin-left: 5px;
    filter: invert(60%); 
  -webkit-filter:invert(60%); 
  }

  .border-top { border-top: 1px solid #e5e5e5; }
  .border-bottom { border-bottom: 1px solid #e5e5e5; }
  .border-top-gray { border-top-color: #adb5bd; }
  
  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
  
  .lh-condensed { line-height: 1.25; }

  `;
