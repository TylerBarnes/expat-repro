import React from 'react';

import ClientOne from '../images/1.png';
import ClientTwo from '../images/2.png';
import ClientThree from '../images/3.png';
import ClientFour from '../images/4.png';
import ClientFive from '../images/5.png';
import ClientSix from '../images/6.jpg';
import ClientSeven from '../images/7.jpg';
import { Link } from 'gatsby';
import './styles/sponsors.scss';

const Clients = () => (
  <div className="containter">
    <div className="row">
      <div className="col-lg-12" style={{ padding: 0 }}>
           <div class="slider">
    	<div class="slide-track">
		<div class="slide">
       
        <img src={ClientOne}/>
		</div>
		<div class="slide">
       
        <img src={ClientTwo}/>
		</div>
		<div class="slide">
	
		<img src={ClientThree}/>
        </div>
		<div class="slide">
		<img src={ClientFour} />
		</div>
		<div class="slide">
        <img src={ClientFive} />
		</div>
		<div class="slide">
		<img src={ClientSix} />
		</div>
		<div class="slide">
		<img src={ClientSeven} />
		</div>
		<div class="slide">
		<img src={ClientOne} />
		</div>
		<div class="slide">
		<img src={ClientTwo} />
		</div>
		<div class="slide">
		<img src={ClientThree} />
		</div>
		<div class="slide">
		<img fluid={ClientFour} />
		</div>
		<div class="slide">
		<img src={ClientFive} />
		</div>
		<div class="slide">
		<img src={ClientSix} />
		</div>
		<div class="slide">
		<img src={ClientSeven} />
		</div>
	</div>
   </div>
   <div className="row" style={{ padding: 30 }}> 
    <div className="col-md-4">
      </div>
      <div className="col-md-5">
      <Link to={`/references/`}>
      <h5><b>See More References >></b></h5>
      </Link>
      </div>
      <div className="col-md-3">
      </div>
    </div>  
      </div>
    </div>
    
  </div>
);



export default Clients;
