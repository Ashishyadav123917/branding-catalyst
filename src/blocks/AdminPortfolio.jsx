import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import FileBase from 'react-file-base64';
import axios from 'axios'

class AdminPortfolio extends Component{
    
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          Desc: '',
          Image: ''
          
        }
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      onChangeDesc(e) {
        this.setState({
          Desc: e.target.value
        });
      }
    
      
      onChangeImage({base64}) {
        console.log(base64)
        this.setState({
          Image: base64
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
      
        const rgstr = {
          name: this.state.name,
          Desc: this.state.Desc,
          Image: this.state.Image
          
        };
      
        console.log(rgstr);
        axios.post('http://localhost:5000/admin/portfolio', rgstr)
      .then(res => console.log(res.data));
        
         window.location = '/admin-portfolio-home';
      }
    

    render(){
        return(
            <Fragment>
                <Helmet pageTitle="Admin Team" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start justify-content-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3 className="title">Portfolio Details</h3>
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
                                                    placeholder="Enter Company Name*"
                                                />
                                            </label>

                                            <label htmlFor="item02">
                                                <input
                                                    type="text"
                                                    name="Desc"
                                                    id="item02"
                                                    value={this.state.Desc}
                                                    onChange={this.onChangeDesc}
                                                    placeholder="Enter Description*"
                                                />
                                            </label>
                                            
                                            <FileBase 
                                            type="file" 
                                            multiple={false} 
                                            onDone={this.onChangeImage} 
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
export default AdminPortfolio;