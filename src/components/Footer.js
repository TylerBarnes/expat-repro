import React from 'react';
import { FooterWrapper } from './styles/FooterStyles';
const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div class="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
      <p><a href="/blogs/all-blogs/">Browse All Blogs</a></p>
      <h3>Pages in 4 different Languages</h3>
      <a href="/تركيا/">Arabic</a><br/>
      <a href="/tурция/">Russian</a><br/>
      <a href="/turquie/">Francais</a> <br/>
      <a href="/ترکیه/">Persian</a> 
      </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
