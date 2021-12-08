import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import AuthService from './../../Services/AuthService';


class HeaderAdmin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            user: {}
            
          };
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    componentDidMount(){
        AuthService.isAuthenticated().then(data=>{
            this.setState({
                    islogged: data.isAuthenticated,
                    user: data.user
               });
            //  console.log(this.state.islogged)
            //  console.log(this.state.user)
         });
       }

     
       handleLogout(){
        AuthService.logout().then(data=>{
           console.log(data)
            window.location= "/admin"
         });
      }


    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        const { logo, color , headerPosition } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboard.png" alt="Trydo" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboard.png" alt="Trydo" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboard.png" alt="Trydo" />;
        }else if(logo === 'all-dark'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboard.png" alt="Trydo" />;
        } else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboard.png" alt="Trydo" />;
        }else{
            logoUrl = <img src="/assets/images/logo/CatalystArtboard.png" alt="Trydo" />;
        }
        
        return(

            
            <header className={`header-area formobile-menu ${headerPosition} ${color}`} style={{background:'#efd3d7'}}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="header-left">
                                    <div className="logo">
                                        <a href="/">
                                            {logoUrl}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-6">
                                <div className="header-right justify-content-end">
                                    <nav className="mainmenunav d-lg-block">
                                        <ul className="mainmenu">


                                            <li><Link to="/" >Home</Link></li>

                                            <li><Link to="/admin">Intern</Link></li>

                                            <li><Link to="/admin-client">Client</Link></li>

                                            <li><Link to="/admin-contact" >Contact</Link></li>

                                            <li className="has-droupdown"><Link to="#">More</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/admin-pricing-home" >Pricing</Link></li>

                                                    <li><Link to="/admin-blog-home" >Blog</Link></li>

                                                    <li><Link to="/admin-brand" >Brand Logo</Link></li>

                                                    <li><Link to="/admin-team-home" >Team</Link></li>

                                                    <li><Link to="/admin-portfolio-home" >Portfolio</Link></li> 

                                                </ul>
                                            </li>      
                                        { this.state.islogged?
                                            <li><Link onClick={this.handleLogout} >Logout</Link></li>
                                            :<li><Link to="/login" >Login</Link></li>
                                        }
                                        </ul>
                                    </nav>
                                    
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}
export default HeaderAdmin;