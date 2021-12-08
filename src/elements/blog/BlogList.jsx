import React, { Component ,Fragment } from "react";
import BlogContent from "./BlogContent";
import axios from 'axios'


class BLogList extends Component{


    constructor(props) {
        super(props);
        this.state = {blogs: []};
      }

      componentDidMount() {
        axios.get('http://localhost:5000/admin/blog')
         .then(response => {
           console.log(response.data)
           this.setState({ blogs: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }






    render() {
        const PostList = this.state.blogs;
        return (
             <Fragment>
                 <div className="row">
                    {PostList.map((value , i ) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <a href="/blog-details">
                                        <img className="w-100" src={value.blogImage} alt="Blog Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">{value.category}</p>
                                    <h4 className="title"><a href={`/blog-details/${value._id}`}>{value.title}</a></h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href={`/blog-details/${value._id}`}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                 </div>
             </Fragment>
        );
    }
}
export default BLogList;