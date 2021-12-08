import React, { Component , Fragment } from "react";
import Header from "../component/header/HeaderAdmin";
import Helmet from "../component/common/Helmet";
import FileBase from 'react-file-base64';
import axios from 'axios'

class AdminPricing extends Component{
    
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeData1 = this.onChangeData1.bind(this);
        this.onChangeData2 = this.onChangeData2.bind(this);
        this.onChangeBlogimage = this.onChangeBlogimage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          title: '',
          category: '',
          date: '',
          author: '',
          data1: '',
          data2: '',
          blogImage: ''
          
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/admin/blog/edit/'+this.props.match.params.id)
         .then(response => {
           console.log(response.data)
           this.setState({
            title: response.data.title,
            category: response.data.category,
            date: response.data.date,
            author: response.data.author,
            data1: response.data.data1,
            data2: response.data.data2,
            blogImage: response.data.blogImage

            });
         })
         .catch((error) => {
            console.log(error);
         })
      }
    

    
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
    
      onChangeCategory(e) {
        this.setState({
          category: e.target.value
        });
      }
    
      onChangeDate(e) {
        this.setState({
          date: e.target.value
        });
      }

      onChangeAuthor(e) {
        this.setState({
          author: e.target.value
        });
      }

      
      onChangeData1(e) {
        this.setState({
          data1: e.target.value
        });
      }
      
      onChangeData2(e) {
        this.setState({
          data2: e.target.value
        });
      }
      
      onChangeBlogimage({base64}) {
        console.log(base64)
        this.setState({
          blogImage: base64
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
      
        const rgstr = {
          title: this.state.title,
          category: this.state.category,
          date: this.state.date,
          author: this.state.author,
          data1: this.state.data1,
          data2: this.state.data2,
          blogImage: this.state.blogImage
          
        };
      
        console.log(rgstr);
        axios.post('http://localhost:5000/admin/blog/update/'+this.props.match.params.id, rgstr)
      .then(res => console.log(res.data));
        
         window.location = '/admin-blog-home';
      }
    

    render(){
        return(
            <Fragment>
                <Helmet pageTitle="Admin Blog" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start justify-content-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--30" style={{display: 'flex', justifyContent: 'center'}}>
                                        <h3 className="title">Blog Details</h3>
                                    </div>
                                    <div className="form-wrapper">
                                        <form onSubmit={this.onSubmit}>
                                            <label htmlFor="item01">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="item01"
                                                    value={this.state.title}
                                                    onChange={this.onChangeTitle} 
                                                    placeholder="Enter Blog Title*"                                                placeholder="Enter Blog Title *"
                                                />
                                            </label>

                                            <label htmlFor="item02">
                                                <input
                                                    type="text"
                                                    name="category"
                                                    id="item02"
                                                    value={this.state.category}
                                                    onChange={this.onChangeCategory}
                                                    placeholder="Enter Category *"
                                                />
                                            </label>

                                            <label htmlFor="item03">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    id="item03"
                                                    value={this.state.date}
                                                    onChange={this.onChangeDate}                                               placeholder="Enter Date *"
                                                />
                                            </label>

                                            <label htmlFor="item04">
                                                <input
                                                    type="text"
                                                    name="author"
                                                    id="item04"
                                                    value={this.state.author}
                                                    onChange={this.onChangeAuthor}
                                                    placeholder="Enter Author *"
                                                />
                                            </label>

                                            <label htmlFor="item05">
                                                <input
                                                    type="text"
                                                    name="data1"
                                                    id="item05"
                                                    value={this.state.data1}
                                                    onChange={this.onChangeData1}
                                                    placeholder="Enter Plan Data 1 *"
                                                />
                                            </label>

                                            <label htmlFor="item06">
                                                <input
                                                    type="text"
                                                    name="data2"
                                                    id="item06"
                                                    value={this.state.data2}
                                                    onChange={this.onChangeData2}
                                                    placeholder="Enter Plan Data 2 *"
                                                />
                                            </label>
                                            
                                            <FileBase 
                                            type="file" 
                                            multiple={false} 
                                            onDone={this.onChangeBlogimage} 
                                            />
                                            

                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>    
        )
    }
}
export default AdminPricing