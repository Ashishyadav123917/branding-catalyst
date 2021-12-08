import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import axios from 'axios'
import FileBase from 'react-file-base64';

class AdminLogo extends Component{
    constructor(props) {
        super(props);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          selectedFile: '',
          
        }
      }

      onChangeFile({base64}) {
          console.log(base64)
        this.setState({
          selectedFile: base64
        });
      }
    
      onSubmit(e) {
        e.preventDefault();
        const rgstr = {
          selectedFile: this.state.selectedFile,
          
        };
      
        console.log(rgstr);
        axios.post('http://localhost:5000/admin/logo', rgstr)
      .then(res => console.log(res.data));
        
         window.location = '/admin-brand';
      }
   
    render(){
        return(
            <Fragment>
                <Helmet pageTitle="Admin Company Logo" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start justify-content-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3 className="title">Update Company Logo</h3>
                                    </div>
                                    <div className="form-wrapper">
                                        <form onSubmit={this.onSubmit}>
                                            <FileBase 
                                            type="file" 
                                            multiple={false} 
                                            onDone={this.onChangeFile} 
                                            />

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
            </Fragment>    
        )
    }
}
export default AdminLogo