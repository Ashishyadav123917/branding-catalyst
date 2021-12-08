import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
// import ContactList from "./Contact.json";
import axios from 'axios'
import {Input} from "mdbreact";

const thStyle = {
  width: "50%"
}; 

class AdminClient extends Component { 

    constructor(props) {
        super(props);
        this.state ={
            search: "",
            ContactList: []
            
        };
      }
    
  componentDidMount() {
    axios.get('http://localhost:5000/users/clients')
     .then(response => {
    //    console.log(response.data)
       this.setState({ContactList: response.data });
      
     })
     .catch((error) => {
        console.log(error);
     })
  }
  
 
  renderContact = contact => {
    const { search } = this.state;

    return (
           <tr key={contact._id}>
               
              <th style={thStyle}><Link to={`/admin-profile/`+contact.username}>{contact.name}</Link></th>
              <th style={thStyle}><Link to={`/admin-profile/`+contact.username}>{contact.username}</Link></th>
                
            </tr>   
                 
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };   
   
  render() {
    const { search } = this.state;
    const FilterContact = this.state.ContactList.filter(contact => {
      return contact.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
        <div>
           <Helmet pageTitle="Admin Contact" />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
            {/* End Header Area  */}

           <br/><br/> <h3><center>Clients List</center></h3>


            <div className="container">
              <div className="row text-center">
                 <div className="col-md-6 offset-md-3 ">
                  <Input
                    label="Search Contact"
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
                        <th style={thStyle}>Username</th>
                        <th style={thStyle}>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FilterContact.map(contact => {
                        return this.renderContact(contact);
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
export default AdminClient;