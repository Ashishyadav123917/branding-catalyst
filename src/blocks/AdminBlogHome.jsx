import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import PageHelmet from "../component/common/Helmet";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/AdminBlogList";

class AdminBlogHome extends Component {
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Admin Blog' />

                 {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--80 bg_color--1">
                    <div className="container">
                        <div className="row pb--30">
                            <div className="col-lg-12">
                                <p>
                                    Upload New Blog : <a className="rn-btn ml--20" href="/admin-blog">Create Blog</a>
                                </p>
                            </div>
                        </div>    
                        <BlogList />
                        <div className="row pt--30">
                            <div className="col-lg-12">
                                {/* Start Pagination Area */}
                                <Pagination />
                                {/* End Pagination Area */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}
            
            </React.Fragment>  
        )
    }
}
export default AdminBlogHome