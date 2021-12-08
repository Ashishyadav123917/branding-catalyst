import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import PageHelmet from "../component/common/Helmet";
import axios from 'axios'


const Logo = props => (
    <li>
    <img src={props.logo.logoName} alt="Logo Images"/>
    <button onClick={() => { props.deleteLogo(props.logo._id) }} className="rn-btn mt--20" >Delete</button>
   
</li>
)

class AdminBrand extends Component{

    constructor(props) {
        super(props);
        this.state = {logos: []};
        this.deleteLogo = this.deleteLogo.bind(this);
      }

      componentDidMount() {
        axios.get('http://localhost:5000/admin/logo')
         .then(response => {
            //  console.log(response.data)
           this.setState({ logos: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }

      
      deleteLogo(id) {
        axios.delete('http://localhost:5000/admin/deleteLogo/'+id)
          .then(res => console.log(res.data));
        this.setState({
          logos: this.state.logos.filter(el => el._id !== id)
        })
      }

      logoList() {
        return this.state.logos.reverse().map(currentlogo => {
          return <Logo logo={currentlogo} deleteLogo={this.deleteLogo} key={currentlogo._id}/>;
        })
      }


    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Admin Brand Logo' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="container">
                    <div className="row pt--80 pb--40">
                        <div className="col-lg-12">
                            <p>
                                Upload New Logo : <a className="rn-btn ml--20" href="/admin-logo">Add Brand Logo</a>
                            </p>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="brand-style-2">
                               
                  {this.logoList()}
                                 </ul>
                        </div>
                    </div>
                </div>            
            </React.Fragment>
        )
    }
}
export default AdminBrand;