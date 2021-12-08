import React, { Component } from "react";

import axios from 'axios'


const Logo = props => (
                     <li>
                        <img src={props.logo.logoName} alt="Logo Images"/>
                    </li>
  )


class BrandTwo extends Component{

    constructor(props) {
        super(props);
        this.state = {logos: []};
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

      logoList() {
        return this.state.logos.map(currentlogo => {
          return <Logo logo={currentlogo} key={currentlogo._id}/>;
        })
      }


    render(){
        return(
            <React.Fragment>
                <ul className="brand-style-2">
                   
                  {this.logoList()}
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;