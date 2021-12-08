import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'MARKETING STRATEGIES',
        description: 'We design a long term plan for your business to grow.'
    },
    {
        icon: <FiLayers />,
        title: 'APP DEVELOPMENT',
        description: 'Application is your day to day friend in your own pocket which can help you grow your business faster.'
    },
    {
        icon: <FiUsers />,
        title: 'DIGITAL MARKETING',
        description: 'When advertisement takes place of your business through digital channels.'
    },
    {
        icon: <FiMonitor />,
        title: 'GRAPHIC DESIGN',
        description: 'We create visual concepts that inspire, inform, and captivate consumers.'
    },
    {
        icon: <FiCast />,
        title: 'WEB DEVELOPMENT',
        description: 'Website is like your store online on web and in this age it is necessary to have one.'
    },
    {
        icon: <FiMonitor />,
        title: 'AR VR',
        description: "Use Virtual Reality and 3D Augmented Reality to create exciting and compelling experiences that drive your customer interaction and enhance conversion rates."
    },
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                     {/*<h2>Digital Marketing</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    {/* <a href="/service-details"> */}
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    {/* </a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                

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
export default Service;