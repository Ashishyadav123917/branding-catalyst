import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import ProgressOne from "./progressbar/ProgressOne";
import ProgressTwo from "./progressbar/ProgressTwo";
import Footer from "../component/footer/Footer";
import AuthService from './../Services/AuthService';
import axios from 'axios'

class ProgressBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            projectData: {}
            
          };  
    }
   
    componentDidMount() {
        axios.get('http://localhost:5000/admin/clients/'+this.props.match.params.id)
         .then(response => {
           console.log(response.data)
           this.setState({
               projectData: response.data

            });
            console.log(this.state.projectData)
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

                {/* Start Progress Bar Area   */}
                <div className="rn-progress-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0 pt--65">
                                    <h3 className="title mb--35">Project Details</h3>
                                    {this.state.projectData?
                                    <h4 >Title: <span>{this.state.projectData.title}</span></h4>
                                    :null}
                                    {this.state.projectData?
                                    <h4 class="title">Duration: <span>{this.state.projectData.duration} Mths</span></h4>
                                    :null} {/* <h4 class="title">Cost: <span>30,000 ₹</span></h4> */}
                                    <br/><br/>
                                        <b>Got Any Question?</b><br/>
                                        <Link className="rn-button-style--2 btn-solid mt--30" to="/contact" >Contact Us</Link>

                                    {/* <button className="rn-button-style--2 btn-solid mt--30" type="submit" value="submit" name="submit" id=""><Link to="/login" >Login</Link></button> */}
                                </div>                               
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                            {this.state.projectData?
                                <ProgressOne designing={this.state.projectData.progress1}
                                management={this.state.projectData.progress2}
                                marketing={this.state.projectData.progress3}
                                development={this.state.projectData.progress4}
                                ProgressStyle="progress-bar--3" />
                                :<h1>Nothing to Show</h1>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Progress Bar Area   */}

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

export default ProgressBar;