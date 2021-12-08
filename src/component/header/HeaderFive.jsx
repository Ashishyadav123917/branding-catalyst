import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import AuthService from './../../Services/AuthService';


class HeaderFive extends Component{
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            user: {}
            
          };
        this.menuTrigger = this.menuTrigger.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    
    
    componentDidMount(){
        AuthService.isAuthenticated().then(data=>{
            console.log(data)
            this.setState({
                    islogged: data.isAuthenticated,
                    user: data.user
              });
            if(this.state.islogged){
                console.log("logged in")
            }
         });
     
       }

     
       handleLogout(){
        AuthService.logout().then(data=>{
            console.log(data);
            window.location= "/"
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
            logoUrl = <img src="/assets/images/logo/CatalystArtboardBlack.png" alt="Trydo" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboardBlack.png" alt="Trydo" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboardBlack.png" alt="Trydo" />;
        }else if(logo === 'all-dark'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboardBlack.png" alt="Trydo" />;
        } else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/CatalystArtboardBlack.png" alt="Trydo" />;
        }else{
            logoUrl = <img src="/assets/images/logo/CatalystArtboardBlack.png" alt="Trydo" />;
        }
        
        return(
            <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
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
                                            <li><Link to="/">Home</Link></li>

                                            <li><Link to="/service" >Service</Link></li>

                                            <li><Link to="/blog" >Blog</Link></li>

                                            <li><Link to="/about" >About</Link></li>
                                            
                                            <li><Link to="/contact" >Contact</Link></li>
                                            { this.state.islogged && this.state.user.role=="client"?
                                             <li><Link to={`profile/${this.state.user.username}`} >My Profile</Link></li> 
                                                    : null
                                            }

                                        { this.state.islogged && this.state.user.role=="intern"?
                                             <li><Link to={`intern-profile/${this.state.user.username}`} >My Profile</Link></li> 
                                                    : null
                                            }

                                            { this.state.islogged?
                                            <div className="pt--10"><button onClick={this.handleLogout} className="rn-btn-1" >Logout</button></div>
                                            :  <li><Link to="/login" >Login</Link></li>
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
export default HeaderFive;