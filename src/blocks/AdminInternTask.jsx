import React, { Component, Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import axios from 'axios'

class AdminInternTask extends Component{
  constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        username: '',
        title: '',
        description: '',
        assigned: '',
        deadline:'',
        completed: false
    };
  }  


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDeadline(e) {
    this.setState({
      deadline: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();
  
    const rgstr = {
      username: this.props.match.params.id,
      title: this.state.title,
      description: this.state.description,
      assigned: new Date().toLocaleDateString(),
      deadline: this.state.deadline,
      completed: false
      
    };
  
    console.log(rgstr);
    axios.post('http://localhost:5000/admin/tasks', rgstr)
  .then(res => console.log(res.data));
    
      window.location = '/admin';
  }

  render(){    
    return(
        <Fragment>
          <Helmet pageTitle="Admin Intern Assign Task" />

          <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
          

          <div className="rn-contact-page ptb--120 bg_color--1">
                  <div className="contact-form--1">
                      <div className="container">
                          <div className="row row--35 align-items-start justify-content-lg-center">
                              <div className="col-lg-6 order-2 order-lg-1">
                                  <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                      <h3 className="title">Assign Intern Task</h3>
                                  </div>
                                  <div className="form-wrapper">
                                      <form onSubmit={this.onSubmit}>
                                          <label htmlFor="item01">
                                              <input
                                                  type="text"
                                                  name="title"
                                                  id="item01"
                                                  value={this.state.title}
                                                  onChange={this.onChangeTitle}
                                                  placeholder="Enter Task's Title *"
                                              />
                                          </label>

                                          <label htmlFor="item02">
                                              <textarea
                                                  type="text"
                                                  name="description"
                                                  id="item02"
                                                  value={this.state.description}
                                                  onChange={this.onChangeDescription}
                                                  placeholder="Enter Task's Description"
                                              />
                                          </label>

                                          <label htmlFor="item03">
                                              <input
                                                  type="date"
                                                  name="deadline"
                                                  id="item03"
                                                  value={this.state.deadline}
                                                  onChange={this.onChangeDeadline}
                                                  placeholder="Enter Task's Deadline *"
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
export default AdminInternTask;