import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock , FiUser , FiMessageCircle , FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import axios from 'axios'

class BlogDetails extends Component{
    
    
    constructor(props) {
        super(props);
        this.state = {blog: {}};
      }

      componentDidMount() {
        axios.get('http://localhost:5000/admin/blog/'+this.props.match.params.id)
         .then(response => {
           console.log(response.data)
           this.setState({ blog: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }



    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Blog Details' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{this.state.blog.title}</h2>
                                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                                        <li><FiClock />{this.state.blog.date}</li>
                                        <li><FiUser />{this.state.blog.author}</li>
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. </p>
                                        <div className="thumbnail">
                                            <img src={this.state.blog.blogImage} alt="Blog Images"/>
                                        </div>
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">
                                            
                                            <div className="content">
                                                    <p>{this.state.blog.data1}</p> 
                                                    <p>{this.state.blog.data2}</p>                                         
                                                                                         
                                             </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

             
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 

            </React.Fragment>
        )
    }
}
export default BlogDetails;