import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
// import InternList from "./Contact.json";
import {Input} from "mdbreact";
import axios from 'axios'
import AuthService from './../Services/AuthService';


class AdminHome extends Component { 
    constructor(props) {
        super(props);
        this.state ={
            search: "",
            islogged: false,
            user: {},
            InternList: []
            
        };
      }
    
  componentDidMount() {
    axios.get('http://localhost:5000/users/interns')
     .then(response => {
    
       this.setState({InternList: response.data });

       AuthService.isAuthenticated().then(data=>{
        this.setState({
                islogged: data.isAuthenticated,
                user: data.user
          });
        console.log(this.state.islogged)
        console.log(this.state.user)
     });
     })
     .catch((error) => {
        console.log(error);
     })
  }

 
  renderIntern = contact => {
    const { search } = this.state;

    return (
        
           <tr key={contact._id}> 
              <th><Link to={`/admin-intern-home/`+contact.username}>{contact.name}</Link></th>
              <th><Link to={`/admin-intern-home/`+contact.username}>{contact.username}</Link></th>
            </tr>  
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };     
  render() {
    const { search } = this.state;
    const FilterIntern = this.state.InternList.filter(contact => {
      return contact.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;

    });

    return (
        <div>
           <Helmet pageTitle="Admin Home" />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
            {/* End Header Area  */}

           <br/><br/> <h3><center>Interns List</center></h3>


            <div className="container">
              <div className="row text-center">
                 <div className="col-md-6 offset-md-3 ">
                  <Input
                    label="Search Intern"
                    icon="search"
                    onChange={this.onchange}
                  />
                </div>
              </div>  
              <div className="row">
              	<div className="col-md-6 offset-md-3">
	                <table className="table">
	                  <thead className="thead-light">
	                    <tr>
	                      <th>Username</th>
	                      <th>Email</th> 
	                    </tr>
	                  </thead>
	                  <tbody>
	                  
	                    {FilterIntern.map(contact => {
	                      return this.renderIntern(contact);
	                    })}
	                
	                   </tbody>
	                </table>
	            </div>    
              </div>
            </div>

            
          </div> 
        )
      }
    }  
	
export default AdminHome;