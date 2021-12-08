import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageHelmet from "../component/common/Helmet";
import axios from 'axios'

class NewPassword extends Component{
    constructor(props){
        super(props);
        
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username:'',
            password1: '',
            password2: '',
        };
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
          username: this.props.match.params.id,
          password1: this.state.password1,
          password2: this.state.password2
          
        };

        axios.post('http://localhost:5000/users/resetPassword',user)
        .then(res =>{
            console.log(res.data)
            window.location="/login"
  
        });
      
   }
   


    render(){
        return(
            <>
                <PageHelmet pageTitle='Reset Password' />
                    <div className="rn-contact-page ptb--120 bg_color--1">
                        <div className="contact-form--1">
                            <div className="container">
                                <div className="row row--35 align-items-start justify-content-lg-center">
                                    <div className="col-lg-6 order-2 order-lg-1">
                                        <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                            <h3 className="title">Change Password</h3>
                                        </div>
                                        <div className="form-wrapper">
                                            <form onSubmit={this.onSubmit}>
                                                 <label htmlFor="item01">
                                                    <input
                                                        type="password"
                                                        name="password1"
                                                        id="item01"
                                                        value={this.state.password1}
                                                        onChange={this.onChangePassword1}
                                                        placeholder="Enter New Password"
                                                    />
                                                </label>

                                                 <label htmlFor="item02">
                                                    <input
                                                        type="password"
                                                        name="password2"
                                                        id="item02"
                                                        value={this.state.password2}
                                                        onChange={this.onChangePassword2}
                                                        placeholder="Confirm Password"
                                                    />
                                                </label>

                                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Reset Password</button>
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
export default NewPassword