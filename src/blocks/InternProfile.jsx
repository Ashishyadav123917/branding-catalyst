import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import ProgressOne from "./progressbar/ProgressOne";
import Footer from "../component/footer/Footer";
import axios from 'axios';
import AuthService from './../Services/AuthService';

const Task = props => (

  <tr>
    {
      !(props.task.completed)?
  <td className="checkbox"> 
  
    <input type="checkbox"  onChange={()=>{props.onhandleChange(props.task._id)}}/> 
 
  </td> :<td>Done</td>
  }
  <td>{props.task.title}</td>
  <td>{props.task.description}</td>
  <td>{props.task.assigned}</td>
  <td>{props.task.deadline}</td>
</tr>
)

class InternProfile extends Component {

  constructor(props) {
    super(props);
    this.onhandleChange = this.onhandleChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
        taskList: [],
        islogged: false,
        user: {},
        name:"",
        date:"",
        verify:false,
        username:""
    };
  }

componentDidMount() {
axios.get('http://localhost:5000/admin/assignedTasks/'+this.props.match.params.id)
 .then(response => {
   this.setState({taskList: response.data });

   AuthService.isAuthenticated().then(data=>{
    // console.log(data)
    this.setState({
            islogged: data.isAuthenticated,
            user: data.user
      });
      console.log(this.state.user)
 });


 })
 .catch((error) => {
    console.log(error);
 })
}

onChangeDate(e) {
  this.setState({
    date: e.target.value
  });
}

onSubmit(e) {
  e.preventDefault();

  const rgstr = {
    name: this.state.user.name,
    username: this.state.user.username,
    date: this.state.date,
    verify:this.state.verify
  };

  console.log(rgstr);
  axios.post('http://localhost:5000/admin/attendance', rgstr)
.then(res => console.log(res.data));
  
    window.history.go(0);
}



taskList() {
  return this.state.taskList.reverse().map(currenttask => {
    return <Task task={currenttask} onhandleChange={this.onhandleChange} key={currenttask._id}/>;
  })
}

onhandleChange(id) {
  console.log(id);
  axios.post('http://localhost:5000/admin/updateTask/'+id)
  .then(response => {
       console.log(response.data)
       window.history.go(0);

    
  })
  .catch((error) => {
     console.log(error);
  })
}
  render(){
    return (
        <>
            <PageHelmet pageTitle='My Profile' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'My Profile'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                <div className="row ptb--100">
                    <div className="col-lg-12 plr--100">
                       <h3><center>Ongoing Task</center></h3>
                       <table className="table">
                          <thead className="thead-light">
                            <tr>
                              <th>Done?</th>
                              <th style={{minWidth:'150px'}}>Title</th>
                              <th>Description</th>
                              <th style={{minWidth:'150px'}}>Assigned Date</th>
                              <th style={{minWidth:'150px'}}>Deadline Date</th> 
                            </tr>
                          </thead>
                          <tbody>
                          { this.taskList() }
                          </tbody>
                       </table>       
                    </div>
                  </div>
                <div className="row row--35 align-items-start justify-content-lg-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                            <h3><center>Attendance</center></h3>
                        </div>
                        <div className="form-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
                            <form onSubmit={this.onSubmit} >
                              <label htmlFor="item01">
                                    <input
                                        type="date"
                                        name="date"
                                        id="item01"
                                        value={this.state.date}
                                        onChange={this.onChangeDate}
                                        placeholder="Presentee Date *"
                                    />
                                </label>


                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button className="rn-button-style--2 btn-solid mt--20 mb--80" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </>
        
    )
  }
}

export default InternProfile;