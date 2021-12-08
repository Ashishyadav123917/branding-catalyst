import React, { Component } from "react";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import axios from 'axios';

class ContactTwo extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          email: '',
          name: '',
          subject: '',
          message: ''
          
        }
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      onChangeSubject(e) {
        this.setState({
          subject: e.target.value
        });
      }

      onChangeMessage(e) {
        this.setState({
          message: e.target.value
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
      
        const contact = {
          email: this.state.email,
          name: this.state.name,
          subject: this.state.subject,
          message: this.state.message
          
        };
      
        console.log(contact);
        axios.post('http://localhost:5000/users/contact', contact)
      .then(res => console.log(res.data));
        
         window.location = '/';
      }


    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.onSubmit}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.name}
                                            onChange={this.onChangeName}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.subject}
                                            onChange={this.onChangeSubject}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.onChangeMessage}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                {/* Start Single Address  */}
                                <div className="col-lg-auto col-md-auto col-sm-12 col-12">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiHeadphones />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Contact With Phone Number</h4>
                                            <p><a href="tel:+91 9004629888">+91 9004629888</a></p>
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Address  */}

                                {/* Start Single Address  */}
                                <div className="col-lg-auto col-md-auto col-sm-12 col-12 mt_mobile--50">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiMail />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Email Address</h4>
                                            <p><a href="mailto:mail@brandingcatalyst.net"> mail@brandingcatalyst.net</a></p>
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Address  */}

                                {/* Start Single Address  */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt_md--50 mt_sm--50">
                                    <div className="rn-address">
                                        <div className="icon">
                                            <FiMapPin />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Location</h4>
                                            <p>Room no 18,6,Dadabhai Nagar Rd,<br/>
                                             Old D N Nagar, Munshi Nagar,
                                             Andheri West, Mumbai, Maharashtra 400053</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Address  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;