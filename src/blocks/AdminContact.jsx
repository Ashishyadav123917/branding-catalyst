import React, { Component } from 'react';
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import axios from 'axios';
import CsvDownload from 'react-json-to-csv'

const Contact = props => (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.subject}</td>
      <td>{props.contact.message}</td>
      <td>{props.contact.date}</td>
    </tr>
  )

export default class AdminContact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {contacts: []};
      }

      componentDidMount() {
        axios.get('http://localhost:5000/users/contact')
         .then(response => {
           console.log(response.data)
           this.setState({ contacts: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }

      contactList() {
        return this.state.contacts.reverse().map(currentcontact => {
          return <Contact contact={currentcontact} key={currentcontact._id}/>;
        })
      }
      
  render() {
    return (
        <div>
           <Helmet pageTitle="Admin Company Logo" />

{/* Start Header Area  */}
<Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
{/* End Header Area  */}

       <br/><br/> <h3><center>Contacts List</center></h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            
            </tr>
          </thead>
          <tbody>
            { this.contactList() }
           </tbody>
        </table>
     <center> <CsvDownload className="btn btn-danger" data={this.state.contacts} filename="ContactsList.csv" /></center>
      </div>
    )
  }
}
