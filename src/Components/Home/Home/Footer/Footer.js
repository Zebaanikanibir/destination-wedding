import React from 'react';
import './Footer.css'
import img1 from '.././../../../images/img1.jpg'
import img2 from '.././../../../images/img2.jpg'
import img3 from '.././../../../images/img3.jpg'
import img4 from '.././../../../images/img4.jpg'
import img5 from '.././../../../images/img5.jpg'
import img6 from '.././../../../images/img6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer className="row  container-fluid footer">
            
            <div className="col-md-3 mt-5">
             <h2 className="text-white head2">About Us</h2>
             <h6 className="text-white">We will create a unique and visually pleasing logo to reflect your overall brand to be used in all areas of your marketing.</h6>
             <div>
            <FontAwesomeIcon className="icon ml-2" icon={faGooglePlusG} />
            <FontAwesomeIcon className="icon ml-2" icon={faFacebookF} />
            <FontAwesomeIcon className="icon ml-2" icon={faInstagram} />
            <FontAwesomeIcon className="icon ml-2" icon={faTwitter} />
            </div>
            </div>
            
            <div className="col-md-3 mt-5">
             <h2 className="text-white head2">Why Choose Us?</h2>
             <h3 className="text-white">HIGH QUALITY SERVICES</h3>
             <h6 className="text-white">We work with clients big and small across a range of sectors and we utilise all forms of media.</h6>
            </div>
            <div className="col-md-3 mt-5">
             <h2 className="text-white head2">Photo Stream</h2>
             <div>
              <img className="fImg" src={img1} alt=""/>
              <img className="fImg" src={img2} alt=""/>
              <img className="fImg" src={img3} alt=""/>
             </div>
             <div>
             <img className="fImg" src={img4} alt=""/>
             <img className="fImg" src={img5} alt=""/>
             <img className="fImg" src={img6} alt=""/>

             </div>
            </div>
            <div className="col-md-3 mt-5">
            <h2 className="text-white head2">Get In Touch</h2>
            <h6 className="text-white head2">MOTO Business Agency Highroad 141, LA City Venice Beach 64713</h6>
            <h6 className="text-white"> <FontAwesomeIcon className="icon " icon={faPhone} /> +49 123475914
            +49 123475915</h6>
            <h6 className="text-white">nibir@gmail@email.com</h6>
            </div>
        </footer>
    );
};

export default Footer;