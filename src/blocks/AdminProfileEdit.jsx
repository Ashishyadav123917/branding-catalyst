import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import axios from 'axios'

class AdminProfile extends Component{
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProgress1 = this.onChangeProgress1.bind(this);
        this.onChangeProgress2 = this.onChangeProgress2.bind(this);
        this.onChangeProgress3 = this.onChangeProgress3.bind(this);
        this.onChangeProgress4 = this.onChangeProgress4.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id:'',
            title: '',
            duration: '',
            username: '',
            progress1: '',
            progress2: '',
            progress3: '',
            progress4: '',
        };
    }

    componentDidMount() {
      axios.post('http://localhost:5000/admin/profile/update/'+this.props.match.params.id)
       .then(response => {
         console.log(response.data)
         this.setState({
             id: response.data._id,
          title: response.data.title,
          duration: response.data.duration,
          username: response.data.username,
          progress1: response.data.progress1,
          progress2: response.data.progress2,
          progress3: response.data.progress3,
          progress4: response.data.progress4,
          });
       })
       .catch((error) => {
          console.log(error);
       })
    }
  

    
    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }

      
      onChangeDuration(e) {
        this.setState({
          duration: e.target.value
        });
      }

      
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
      
      onChangeProgress1(e) {
        this.setState({
          progress1: e.target.value
        });
      }
      
      onChangeProgress2(e) {
        this.setState({
          progress2: e.target.value
        });
      }
      
      onChangeProgress3(e) {
        this.setState({
          progress3: e.target.value
        });
      }
      
      onChangeProgress4(e) {
        this.setState({
          progress4: e.target.value
        });
      }

    onSubmit(e) {
        e.preventDefault();
      
        const client= {
            id: this.state.id,
          title: this.state.title,
          duration: this.state.duration,
          username: this.state.username,
          progress1: this.state.progress1,
          progress2: this.state.progress2,
          progress3: this.state.progress3,
          progress4: this.state.progress4,
        }
        console.log(client);
        axios.post('http://localhost:5000/admin/client/update', client)
      .then(res => console.log(res.data));
         window.location = '/admin';
      }

    render(){
        return(
            <Fragment>
                <Helmet pageTitle="Admin Profile" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start justify-content-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3 className="title">Client Profile Details</h3><br/>
                                     
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
                                                    placeholder="Enter Project Title *"
                                                />
                                            </label>

                                            <label htmlFor="item02">
                                                <input
                                                    type="text"
                                                    name="duration"
                                                    id="item02"
                                                    value={this.state.duration}
                                                    onChange={this.onChangeDuration}
                                                    placeholder="Enter Project Duration *"
                                                />
                                            </label>

                                            <label htmlFor="item03">
                                                <input
                                                    type="email"
                                                    name="username"
                                                    id="item03"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    placeholder="Enter Clients's Email ID *"
                                                  
                                                  
                                                />
                                            </label>

                                            <label htmlFor="item04">
                                                <input
                                                    type="number"
                                                    name="progress1"
                                                    id="item04"
                                                    value={this.state.progress1}
                                                    onChange={this.onChangeProgress1}
                                                    placeholder="Enter Designing Progress *"
                                                />
                                            </label>

                                            <label htmlFor="item05">
                                                <input
                                                    type="number" 
                                                    name="progress2"
                                                    id="item05"
                                                    value={this.state.progress2}
                                                    onChange={this.onChangeProgress2}
                                                    placeholder="Enter Management Progress *"
                                                />
                                            </label>

                                            <label htmlFor="item06">
                                                <input
                                                    type="number"
                                                    name="progress3"
                                                    id="item06"
                                                    value={this.state.progress3}
                                                    onChange={this.onChangeProgress3}
                                                    placeholder="Enter Marketing Progress *"
                                                />
                                            </label>

                                            <label htmlFor="item07">
                                                <input
                                                    type="number"
                                                    name="progress4"
                                                    id="item07"
                                                    value={this.state.progress4}
                                                    onChange={this.onChangeProgress4}
                                                    placeholder="Enter Devlopment Progress *"       
                                                />
                                            </label>

                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Update</button>
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
export default AdminProfile