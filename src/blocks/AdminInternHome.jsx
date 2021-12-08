import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import axios from 'axios'



const Attendance = props => (
    
   <tr key={props.attendance._id}>
                                  
   <td className="checkbox"> 
   
     <input type="checkbox" onChange={()=>{props.onhandleChange(props.attendance._id)}}/> 
   
   </td>
   <td>{props.attendance.name}</td>
   <td>{props.attendance.date}</td>
   </tr>  

)

const Task = props => (
  <tr>
  <td>{props.task.title}</td>
  <td>{props.task.description}</td>
  <td>{props.task.assigned}</td>
  <td>{props.task.deadline}</td>
  {
    props.task.completed?
    <td>Done</td>
    :<td>Ongoing</td>
  }
</tr>  
)

class AdminInternHome extends Component {  
  constructor(props) {
    super(props);
    this.onhandleChange = this.onhandleChange.bind(this);
    this.state ={
        search: "",
        ttldays:0,
        taskList: [],
        attendance:[],
       
        
    };
  }

componentDidMount() {
  axios.get('http://localhost:5000/admin/ttlAttendance/'+this.props.match.params.id)
  .then(res => {
    console.log(res.data)
    this.setState({ttldays:res.data });
    
  })
  .catch((error) => {
     console.log(error);
  })

axios.get('http://localhost:5000/admin/assignedTasks/'+this.props.match.params.id)
 .then(response => {
   this.setState({taskList: response.data });
  //  console.log(this.state.taskList);

   axios.get('http://localhost:5000/admin/attendance/'+this.props.match.params.id)
 .then(response => {
   this.setState({attendance: response.data });
  //  console.log(this.state.attendance);
  
 })
 .catch((error) => {
    console.log(error);
 })


 })
 .catch((error) => {
    console.log(error);
 })
}


taskList() {
  return this.state.taskList.reverse().map(currenttask => {
    return <Task task={currenttask} key={currenttask._id}/>;
  })
}

attendanceList() {
  return this.state.attendance.reverse().map(currentattendance => {
    return <Attendance attendance={currentattendance} onhandleChange={this.onhandleChange} key={currentattendance._id}/>;
  })
}

onhandleChange(id) {
  console.log(id);
  axios.post('http://localhost:5000/updateAttendance/'+id)
  .then(response => {
       console.log(response.data)
       window.history.go(0);
  })
  .catch((error) => {
     console.log(error);
  })
}


    render(){
    return(
        <Fragment>
            <Helmet pageTitle="Admin Intern Home" />
 
            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
            {/* End Header Area  */}

            {/* Start Blog Area */}
                <div className="rn-blog-area ptb--80 bg_color--1">
                    <div className="container">
                        <div className="row pb--30">
                            <div className="col-lg-12">
                            	<h3><center>Interns Profile: {this.props.match.params.id}</center></h3>
                                <p>
                                    Assign Task : <a className="rn-btn ml--20" href={`/admin-intern-task/`+this.props.match.params.id}>Give Task</a>
                                </p>
                            </div>
                            <div className="col-lg-12 mt--20">
                                <p>
                                Total Days Present : <span><b> {this.state.ttldays} </b></span>
                                </p>
                            </div>  
                        </div>    
                        
                        <div className="row pt--30">
                            <div className="col-lg-12">
                               <h3><center>All Tasks</center></h3>
                               <table className="table">
                                  <thead className="thead-light">
                                    <tr>
                                      <th>Title</th>
                                      <th>Description</th>
                                      <th>Assigned Date</th>
                                      <th>Deadline Date</th> 
                                      <th>Status</th> 
                                    </tr>
                                  </thead>
                                  <tbody>
                                  { this.taskList() }
                                  </tbody>
                               </table>       

                            </div>
                        </div>

                        <div className="row pt--30">
                          <div className="col-md-6 offset-md-3">
                            <h3><center>Attendance</center></h3>
                            <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Present?</th>
                                    <th style={{minWidth:'150px'}}>Name</th>
                                    <th style={{minWidth:'150px'}}>Presentte Date</th> 
                                  </tr>
                                </thead>
                                <tbody>
                                   {this.attendanceList()}
                                </tbody>
                            </table>       
                          </div>
                        </div>
                      </div>
                </div>
        </Fragment>    
    )
    }
}
	
export default AdminInternHome;