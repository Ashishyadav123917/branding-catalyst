import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageHelmet from "../component/common/Helmet";
import axios from 'axios'

class ForgotPassword extends Component{
    constructor(props){
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
        };
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
      onSubmit(e) {
        e.preventDefault();
      
        const user = {
          username: this.state.username
          
        };  
        
    axios.post('http://localhost:5000/users/femail',user)
      .then(res =>{
          console.log(res.data)

      });
    }

    render(){
        return(
            <>
                <PageHelmet pageTitle='Forgot Password' />
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start justify-content-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3 className="title">Forgot Password</h3>
                                    </div>
                                    <div className="form-wrapper">
                                        <form onSubmit={this.onSubmit}>
                                            <label htmlFor="item01">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="item01"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    placeholder="Enter your username *"
                                                />
                                            </label>

                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>    
        )
    }
}
export default ForgotPassword