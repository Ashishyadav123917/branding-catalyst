import React, {Component} from 'react'
import { FiChevronUp , FiCheck } from "react-icons/fi";
import Header from "../component/header/HeaderAdmin";
import PageHelmet from "../component/common/Helmet";
import axios from 'axios'

const Plan = props => (
    <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">{props.Plan.name}</h4>
                                            <div className="pricing">
                                                <span className="price">{props.Plan.price}</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> {props.Plan.plan1}</li>
                                                <li><FiCheck /> {props.Plan.plan2}</li>
                                                <li><FiCheck /> {props.Plan.plan3}</li>
                                                <li><FiCheck /> {props.Plan.plan4}</li>
                                                <li><FiCheck /> {props.Plan.plan5}</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <button onClick={() => { props.deletePlan(props.Plan._id) }} className="rn-btn" >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
)


class AdminPricingTable extends Component{
    constructor(props) {
        super(props);
        this.state = {Plans: []};
        this.deletePlan = this.deletePlan.bind(this);
      }

      componentDidMount() {
        axios.get('http://localhost:5000/admin/pricing')
         .then(response => {
              console.log(response.data)
           this.setState({ Plans: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }

      
      deletePlan(id) {
        axios.delete('http://localhost:5000/admin/deletePlan/'+id)
          .then(res => console.log(res.data));
        this.setState({
          Plans: this.state.Plans.filter(el => el._id !== id)
        })
      }

      PlanList() {
        return this.state.Plans.map(currentPlan => {
          return <Plan Plan={currentPlan} deletePlan={this.deletePlan} key={currentPlan._id}/>;
        })
      }
 render() {
    return (
        <>
            <PageHelmet pageTitle='Admin Pricing Table' />

            {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
            {/* End Header Area  */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">
                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area pt--80 bg_color--5">
                    <div className="container">
                        <div className="row pb--40">
                            <div className="col-lg-12">
                                <p>
                                    Upload New Pricing Card : <a className="rn-btn ml--20" href="/admin-pricing">Create Pricing Card</a>
                                </p>
                            </div>
                        </div>
                        <div className="row mt--20">

                            {/* Start PRicing Table Area  */}
                            {this.PlanList()}
                            {/* End PRicing Table Area  */}
                            
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}
            </main>
            {/* End Page Wrapper  */}

        </>
        
    )

 }
}
export default AdminPricingTable;