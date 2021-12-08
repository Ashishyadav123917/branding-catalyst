import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import axios from 'axios'

class AdminPricing extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePlan1 = this.onChangePlan1.bind(this);
        this.onChangePlan2 = this.onChangePlan2.bind(this);
        this.onChangePlan3 = this.onChangePlan3.bind(this);
        this.onChangePlan4 = this.onChangePlan4.bind(this);
        this.onChangePlan5 = this.onChangePlan5.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          price: 0,
          plan1: '',
          plan2: '',
          plan3: '',
          plan4: '',
          plan5: ''
          
        }
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      onChangePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
    
      onChangePlan1(e) {
        this.setState({
          plan1: e.target.value
        });
      }

      onChangePlan5(e) {
        this.setState({
          plan5: e.target.value
        });
      }

      onChangePlan2(e) {
        this.setState({
          plan2: e.target.value
        });
      }

      onChangePlan3(e) {
        this.setState({
          plan3: e.target.value
        });
      }

      onChangePlan4(e) {
        this.setState({
          plan4: e.target.value
        });
      }

    
    
      onSubmit(e) {
        e.preventDefault();
      
        const plan = {
          name: this.state.name,
          price: this.state.price,
          plan1: this.state.plan1,
          plan2: this.state.plan2,
          plan3: this.state.plan3,
          plan4: this.state.plan4,
          plan5: this.state.plan5,
          
        };
      
        console.log(plan);
        axios.post('http://localhost:5000/admin/plan', plan)
      .then(res => console.log(res.data));
        
         window.location = '/admin-pricing-home';
      }
    
    render(){
        return(
            <Fragment>
                <Helmet pageTitle="Admin Pricing" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start justify-content-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3 className="title">Pricing Card</h3>
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
                                                    placeholder="Enter Plan Name *"
                                                />
                                            </label>

                                            <label htmlFor="item02">
                                                <input
                                                    type="number"
                                                    name="price"
                                                    id="item02"
                                                    value={this.state.price}
                                                    onChange={this.onChangePrice}
                                                    placeholder="Enter Price"
                                                />
                                            </label>

                                            <label htmlFor="item03">
                                                <input
                                                    type="text"
                                                    name="plan1"
                                                    id="item03"
                                                    value={this.state.plan1}
                                                    onChange={this.onChangePlan1}
                                                    placeholder="Enter Plan Data 1 *"
                                                />
                                            </label>

                                            <label htmlFor="item04">
                                                <input
                                                    type="text"
                                                    name="plan2"
                                                    id="item04"
                                                    value={this.state.plan2}
                                                    onChange={this.onChangePlan2}
                                                    placeholder="Enter Plan Data 2 *"
                                                />
                                            </label>

                                            <label htmlFor="item05">
                                                <input
                                                    type="text"
                                                    name="plan3"
                                                    id="item05"
                                                    value={this.state.plan3}
                                                    onChange={this.onChangePlan3}
                                                    placeholder="Enter Plan Data 3 *"
                                                />
                                            </label>

                                            <label htmlFor="item06">
                                                <input
                                                    type="text"
                                                    name="plan4"
                                                    id="item06"
                                                    value={this.state.plan4}
                                                    onChange={this.onChangePlan4}
                                                    placeholder="Enter Plan Data 4 *"
                                                />
                                            </label>

                                            <label htmlFor="item07">
                                                <input
                                                    type="text"
                                                    name="plan5"
                                                    id="item07"
                                                    value={this.state.plan5}
                                                    onChange={this.onChangePlan5}
                                                    placeholder="Enter Plan Data 5 *"
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
            </Fragment>    
        )
    }
}
export default AdminPricing