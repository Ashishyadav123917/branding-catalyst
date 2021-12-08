import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../Services/AuthService';
// import PageHelmet from "../component/common/Helmet";
// import ScrollToTop from 'react-scroll-up';
// import { FiChevronUp } from "react-icons/fi";
// import Header from "../component/header/Header";
// import Footer from "../component/footer/Footer";

class Login extends Component{
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: ''
          
        }
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
      
        const user = {
          username: this.state.username,
          password: this.state.password
          
        };
      

      AuthService.login(user).then(data=>{
           console.log(data)
        if(data.isAuthenticated){
          window.location="/"
        }
     
    });
   }
   



    render(){
        return(
            <div className="rn-contact-page ptb--120 bg_color--1">
                <div className="contact-form--1">
                    <div className="container">
                        <div className="row row--35 align-items-start justify-content-lg-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                    <h3 className="title">Login</h3>
                                </div>
                                <div className="form-wrapper">
                                    <form onSubmit={this.onSubmit}>
                                        <label htmlFor="item01">
                                            <input
                                                type="text"
                                                name="username"
                                                id="item02"
                                                value={this.state.username}
                                                onChange={this.onChangeUsername}
                                                placeholder="Your email *"
                                            />
                                        </label>

                                        <label htmlFor="item02">
                                            <input
                                                type="password"
                                                name="password"
                                                id="item03"
                                                value={this.password}
                                                onChange={this.onChangePassword}
                                                placeholder="Enter Password"
                                            />
                                        </label>
                                        <ul>
                                            <li><Link to="/register" >New here, Register</Link></li>
                                            <li><Link to="/forgot-password" >Forgot Password?</Link></li>
                                        </ul>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login