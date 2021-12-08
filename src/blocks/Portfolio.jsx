import React,{Component} from 'react'
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot , portfolioSlick2 } from "../page-demo/script";
import axios from 'axios'



const Portfolios = props => (

    <div className="portfolio" key={props.portfolio._id}>
                                                   
                                                   
                                                   
 <div className="thumbnail-inner">
              <div className={props.portfolio.Image}></div>
              <div className={props.portfolio.Image}></div>
          </div>
          <div className="content">
              <div className="inner">
                  <p>{props.portfolio.Desc}</p>
                  <h4>{props.portfolio.name}</h4>
              </div>
          </div>
      </div>

    
  )


class Portfolio extends Component{

    constructor () {
        super()
        this.state = {
            portfolio: [],
           
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/admin/portfolio')
         .then(response => {
             console.log(response.data)
           this.setState({ portfolio: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }


      
      portfolioList() {
        return this.state.portfolio.map(currentpricing => {
          return <Portfolios portfolio={currentpricing} key={currentpricing._id}/>;
        })
      }


    render(){

        
const list = this.state.portfolio;

const PortfolioList2 = this.state.portfolio;
    return (
        <>

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--10 pb--140 bg_color--1">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            
                                         {this.portfolioList()}       
                                         
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}
    
        </>
        
    )
                                            }
}

export default Portfolio;