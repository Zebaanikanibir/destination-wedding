import React from 'react';
import image from '../../../images/middle.jpg';
import './ExtraPart.css';
const ExtraPart = () => {
    return (
        <section className=" container-fluid mt-5 mb-5 justify-content-center">
            <h2 className="head3">Our Function</h2>
            <div className="row mt-5">
            <div className="col-md-4 mt-5">
             <div className="box">
            <h4>Wedding Ceremony</h4>
            <h5>16.00</h5>
            <p><small>We invite you to join us in celebrating our love. On this day we will marry the one we laugh with, dream with, love. We have chosen to continue our growth through marriage.</small></p>
             </div>
             <div className="box">
             <h4>Lunch Time</h4>
             <h5>21.00</h5>
             <p><small>We stopped by Carino's over labor day weekend and spoke with one of the event manager/chef guys. He was sooo nice and it sounds like it's gonna be an awesome lunch</small></p>
             </div>
            </div>
            <div className="col-md-4 wrapper">
             <img  src={image} alt=""/>
             <div className="overlay">
                 <div className="content">
                     <h3>We Make your Moment </h3>
                     <h3>More Special❤❤❤...</h3>
                 </div>
             </div>
            </div>
            <div className="col-md-4 mt-5">
             <div className="box">
              <h4>Party</h4>
              <h5>22.00</h5>
              <p><small>We're using Music Connection as our DJ. We had originally been thinking about hiring musicians to do the ceremony, but all of the prices I found were a lot more than we were wanting to pay</small></p>
             </div>
             <div className="box">
             <h4>Cake Cutting</h4>
             <h5>23.00</h5>
             <p><small>As one of the last activities leading up to the send-off, the cutting of cake is a tradition that embodies matrimonial commitment and allows the bride groom to share a final treat with their guests.</small></p>
             </div>
            </div>
            </div>
        </section>
    );
};

export default ExtraPart;