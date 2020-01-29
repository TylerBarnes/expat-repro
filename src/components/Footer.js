import React from 'react';


import tangoFB from '../images/tango-facebook-icon.svg';
import tangoIG from '../images/tango-instagram-icon.svg';
import tangoLI from '../images/tango-linkedin-icon.svg';

import { FooterWrapper } from './styles/FooterStyles';


const Footer = () => (
  <FooterWrapper>
    <div className="container">
    
     <div className="row">
        <div className="col-md-4"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-duration="60s"
        data-sal-easing="ease">
          <h3>PROFESSIONAL ASSISTANCE</h3>
          <p className="expat-contact">Expat Guide Turkey is entity working under structure of ATA Institutional Consultancy. <br/><br/>Expat Guide Turkey is a consultancy firm offering umbrella company services and services on immigration issues including work and residence permit, company formation and property management for foreigners in Turkey. Behind its success, Ata Institutional Consultancy’s efficiency and customer oriented management style plays a very important role. </p>          
      </div>

        <div className="col-md-1"><br/></div>
        <div className="col-md-7"
        data-sal="slide-left"
        data-sal-delay="400"
        data-sal-duration="60s"
        data-sal-easing="ease">
          <h3>GET IN TOUCH</h3>
            <form 
            name="contact" 
            method="POST" 
            action="/success/" 
            data-netlify="true"
            data-netlify-honeypot="bot-field" 
            class="needs-validation"
            novalidate netlify
            >

            <div className="half left cf">
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" id="input-name" class="form-control" placeholder="Your Name" required /> 
              <input type="email" name="email" id="input-email" class="form-control" placeholder="Email address" title="Email (format: your@example.com)" required  />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
              <input id="phonenum" type="tel" class="form-control" pattern="^\d{4}-\d{3}-\d{4}$" placeholder="Phone Number (xxxx-xxx-xxxx)"  title="Phone (format: xxxx-xxx-xxxx)" required />
            </div>
            <div className="half right cf">
            <textarea name="message" id="input-message" rows="4" class="form-control"  placeholder="Message"></textarea>
            </div>
            <div netlify-recaptcha></div>
            <input
            type='submit' id="input-submit" class="btn btn-primary btn-lg btn-block" value="Send Message"
            />
            </form>
            </div>
        </div>

     <div className="row">
        <div className="col-md-4"><br/><br/><br/></div>
        <div className="col-md-4"><br/><br/><br/></div>
        <div className="col-md-4"><br/><br/><br/></div>
     </div>

      <div className="row">
        <div className="col-md-12"
        data-sal="slide-left"
        data-sal-delay="400"
        data-sal-duration="60s"
        data-sal-easing="ease">
        
         <h1 className="expat-heading">OFFICE LOCATION</h1>
         
        </div>
      </div>
        

      <div className="row">
        <div className="col-md-4"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="60s"
        data-sal-easing="ease">
          <h3>ATA INSTITUTIONAL CONSULTANCY</h3>
          <p className="expat-contact">Next Level Loft Ofise Kızılırmak Street 4/65-B Floor:24 Çankaya/Ankara/TURKEY < br/> <a href="mailto:info@expatguideturkey.com">
            info@expatguideturkey.com
            </a></p>          
        </div>



        <div className="col-md-3"
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="60s"
        data-sal-easing="ease">
          <h3>EXPAT GUIDE TURKEY</h3>
          <p className="expat-contact">Next Level Loft Ofise Kızılırmak İstiklal Street Number: 187 Floor: 4 Beyoğlu – İstanbul/ TURKEY < br/> <a href="mailto:info@expatguideturkey.com">
            info@expatguideturkey.com
            </a>
          </p>
        </div>
        <div className="col-md-1"><br/></div>


        <div className="col-md-4"
         data-sal="slide-up"
         data-sal-delay="500"
         data-sal-duration="60s"
         data-sal-easing="ease">
          <h3>LANGUAGES</h3>
          <p className="expat-contact">
          <a href="https://www.atakurumsal.com/">Turkish</a><br/> 
          <a href="/تركيا/">Arabic</a><br/>
          <a href="/t%D1%83%D1%80%D1%86%D0%B8%D1%8F/">Russian</a><br/>
          <a href="/turquie/">Francais</a> <br/>
          <a href="/%D8%AA%D8%B1%DA%A9%DB%8C%D9%87/">Persian</a> 

          </p></div>


      </div>

      <div className="row">
      <div className="col-md-12"
      data-sal="slide-left"
      data-sal-delay="300"
      data-sal-duration="60s"
      data-sal-easing="ease">
          <h1 className="expat-heading">SOCIAL CONNECT</h1>
      </div>
      </div>
      
        <div className="row">
        <div className="col-md-12"
        data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="40s"
        data-sal-easing="ease">
            <span className="social">
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/atakurmsal/"
                >
                  <img className="linkedin" src={tangoLI} alt="tango-li" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/expatguideturkey/"
                >
                  <img className="facebook" src={tangoFB} alt="tango-fb" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/expatguideturkey/"
                >
                  <img className="instagram" src={tangoIG} alt="tango-ig" />
                </a>
              </span>
          </div>   
        </div>
        
      <div class="row">
      <div className="col-md-12"
       data-sal="fade"
       data-sal-delay="500"
       data-sal-duration="60s"
       data-sal-easing="ease"
      >
      <p className="expat-contact">Copyright© 2011-2017 ExpatGuideTurkey.com. All rights reserved. <a href="/privacy-policy/" >Privacy Policy</a> - <a href="/legal/">Terms and Conditions</a></p> 
      </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
