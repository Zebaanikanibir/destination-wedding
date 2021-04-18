import React from 'react';
import './Form.css'
const Form = () => {
    return (
        <section className="form1 App">
            <h1 className="text-white head1">Contact Us</h1>
            <p className="text-white" >..........💑..........</p>
            <p className="text-white">We Are Open 24/7.You Can Connect With Us At Any time </p>
            <form className="container ">
                        <div className="d-flex">
                        <div class="form-group">
                          
                          <input type="text" className="form-control inputBox" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                      </div>
                      <div class="form-group">
                          <input type="email" className="form-control inputBox" id="exampleInputPassword1" placeholder="Your Email" name="email" />
                      </div>
                        </div>

                        <div className="d-flex">
                        <div class="form-group">
                            <input type="password" className="form-control inputBox" id="exampleInputPassword1" placeholder="About Cost" name="password" />
                        </div>
                        <div class="form-group">
                            <input type="number" className="form-control inputBox" id="exampleInputPassword1" placeholder="Phone Number" name="number" />
                        </div>
                        </div>
                        <div class="form-group">
                        
                        <textarea style={{height: '200px'}} className="form-control" placeholder="Your Message" aria-label="With textarea"/>
                            
                        </div>
                        <button id="send">Send</button>
                    </form>


        </section>
    );
};

export default Form;