import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthService from '../Services/AuthService';
// import PageHelmet from "../component/common/Helmet";
// import ScrollToTop from 'react-scroll-up';
// import { FiChevronUp } from "react-icons/fi";
// import Header from "../component/header/Header";
// import Footer from "../component/footer/Footer";

export default class Register extends Component{
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          name: '',
          role:'',
          password1: '',
          password2: ''
          
        }
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }

      onChangeRole(e) {
        this.setState({
          role: e.target.value
        });
      }
    
      onChangePassword1(e) {
        this.setState({
          password1: e.target.value
        });
      }

      onChangePassword2(e) {
        this.setState({
          password2: e.target.value
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
      
        const user = {
          username: this.state.username,
          name: this.state.name,
          role: this.state.role,
          password1: this.state.password1,
          password2: this.state.password2
          
        };
      
        console.log(user);
      //   axios.post('http://localhost:5000/users/register', rgstr)
      // .then(res => console.log(res.data));
        
      AuthService.register(user).then(data=>{
        console.log(data) 
    });
         window.location = '/';
      }
    

    render(){
        return(
            <div className="rn-contact-page ptb--120 bg_color--1">
                <div className="contact-form--1">
                    <div className="container">
                        <div className="row row--35 align-items-start justify-content-lg-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                    <h3 className="title">Register</h3>
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
                                                name="username"
                                            
                                                value={this.state.username}
                                                onChange={this.onChangeUsername}
                                                placeholder="Your email *"
                                            />
                                        </label>

                                        
                                        <label htmlFor="item02">
                                            <input
                                                type="text"
                                                name="role"
                                                id="item02"
                                                value={this.state.role}
                                                onChange={this.onChangeRole}
                                                placeholder="Your role *"
                                            />
                                        </label>

                                        <label htmlFor="item03">
                                            <input
                                                type="password"
                                                name="password1"
                                                id="item03"
                                                value={this.state.password1}
                                                onChange={this.onChangePassword1}
                                                placeholder="Enter Password"
                                            />
                                        </label>
                                        <label htmlFor="item04">
                                            <input
                                                type="password"
                                                id="item04"
                                                name="password2"
                                                value={this.state.password2}
                                                onChange={this.onChangePassword2}
                                                placeholder="Confirm Password"
                                            />
                                        </label>
                                        <ul>
                                            <li><Link to="/login">Already Regsitered, Login</Link></li> 
                                        </ul>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Register</button>
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
