import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import PageHelmet from "../component/common/Helmet";
import BlogList from "../elements/team/AdminTeamList";

class AdminTeamHome extends Component {
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Admin Team' />

                 {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--80 bg_color--1">
                    <div className="container">
                        <div className="row pb--30">
                            <div className="col-lg-12">
                                <p>
                                    Upload New Member : <a className="rn-btn ml--20" href="/admin-team">Upload Team Data</a>
                                </p>
                            </div>
                        </div>    
                        <BlogList />
                        
                    </div>
                </div>
                {/* End Blog Area */}
            
            </React.Fragment>  
        )
    }
}
export default AdminTeamHome