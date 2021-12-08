// React Required
import React, { Component } from 'react';


import ReactDOM from "react-dom";
import AuthProvider from './Context/AuthContext';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import CorporateBusiness from './home/CorporateBusiness';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";
import Login from "./elements/Login";
import Register from "./elements/Register";
import ForgotPassword from "./elements/ForgotPassword";
import NewPassword from "./elements/NewPassword";



// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import AdminHome from "./blocks/AdminHome";
import AdminPricing from "./blocks/AdminPricing";
import AdminBlog from "./blocks/AdminBlog";
import AdminBlogEdit from "./blocks/AdminBlogEdit";
import AdminProfileEdit from "./blocks/AdminProfileEdit";
import AdminLogo from "./blocks/AdminLogo";
import AdminPortfolio from "./blocks/AdminPortfolio";
import AdminClient from "./blocks/AdminClient";
import AdminContact from "./blocks/AdminContact";
import AdminProfile from "./blocks/AdminProfile";
import MyProfile from "./blocks/MyProfile";
import AdminBlogHome from "./blocks/AdminBlogHome";
import AdminBrand from "./blocks/AdminBrand";
import AdminPricingTable from "./blocks/AdminPricingTable";
import AdminInternHome from "./blocks/AdminInternHome";
import AdminInternTask from "./blocks/AdminInternTask";
import InternProfile from "./blocks/InternProfile";
import AdminTeam from "./blocks/AdminTeam";
import AdminTeamHome from "./blocks/AdminTeamHome";
import AdminTeamEdit from "./blocks/AdminTeamEdit";
import AdminPortfolioEdit from "./blocks/AdminPortfolioEdit";
import AdminPortfolioHome from "./blocks/AdminPortfolioHome";

import PrivateRoute from './hocs/PrivateRoutes';



import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={CorporateBusiness}/>

                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details/:id`} component={BlogDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/forgot-password`} component={ForgotPassword}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/reset-password/:id`} component={NewPassword}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/>
                    <PrivateRoute exact path="/admin" roles={["admin"]} component={AdminHome}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-pricing`} component={AdminPricing}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-blog`} component={AdminBlog}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-logo`} component={AdminLogo}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-portfolio`} component={AdminPortfolio}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-contact`} component={AdminContact}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-profile/:id`} component={AdminProfile}/>
                    <PrivateRoute exact roles={["client"]} path={`${process.env.PUBLIC_URL}/profile/:id`} component={MyProfile}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-blog-home`} component={AdminBlogHome}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-brand`} component={AdminBrand}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-pricing-home`} component={AdminPricingTable}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/blog/edit/:id`} component={AdminBlogEdit}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/profile/update/:id`} component={AdminProfileEdit}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-client`} component={AdminClient}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-intern-home/:id`} component={AdminInternHome}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-intern-task/:id`} component={AdminInternTask}/>
                    <PrivateRoute exact roles={["intern"]} path={`${process.env.PUBLIC_URL}/intern-profile/:id`} component={InternProfile}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/team/edit/:id`} component={AdminTeamEdit}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/portfolio/edit/:id`} component={AdminPortfolioEdit}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-team`} component={AdminTeam}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-team-home`} component={AdminTeamHome}/>
                    <PrivateRoute exact roles={["admin"]} path={`${process.env.PUBLIC_URL}/admin-portfolio-home`} component={AdminPortfolioHome}/>



                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<AuthProvider><Root /></AuthProvider>, document.getElementById('root'));
serviceWorker.register();
