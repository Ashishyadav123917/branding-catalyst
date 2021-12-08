import React, { Component } from "react";
import axios from 'axios'


const Logo = props => (
                     <li>
                        <img src={props.logo.logoName} alt="Logo Images"/>
                    </li>
  )

class Brand extends Component{


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
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    
                  {this.logoList()}
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;