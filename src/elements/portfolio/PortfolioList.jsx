import React, { Component ,Fragment } from "react";
import axios from 'axios'


const Blog = props => (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    
                                        <img className="w-100" src={props.Blog.Image} alt="Blog Images"/>
                                    
                                </div>
                                <div className="content">
                                    <p className="blogtype">{props.Blog.name}</p>
                                    <h4 className="title">{props.Blog.Desc}</h4>
                                    <div className="blog-btn">
           <a className="rn-btn text-white" href={`/portfolio/edit/${props.Blog._id}`}>Edit</a>
                            
    <button onClick={() => { props.deleteBlog(props.Blog._id) }} className="rn-btn text-white ml--20" >Delete</button>
   
                                    </div>
                                </div>
                            </div>
                        </div>
   

)

class AdminTeamList extends Component{

    constructor(props) {
        super(props);
        this.state = {Blogs: []};
        this.deleteBlog = this.deleteBlog.bind(this);
      }

      componentDidMount() {
        axios.get('http://localhost:5000/admin/portfolio')
         .then(response => {
              console.log(response.data)
           this.setState({ Blogs: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }

      
      deleteBlog(id) {
        axios.delete('http://localhost:5000/admin/deletePortfolio/'+id)
          .then(res => console.log(res.data));
        this.setState({
          Blogs: this.state.Blogs.filter(el => el._id !== id)
        })
      }

      blogList() {
        return this.state.Blogs.reverse().map(currentBlog => {
          return <Blog Blog={currentBlog} deleteBlog={this.deleteBlog} key={currentBlog._id}/>;
        })
      }

    render() {
      
        return (
             <Fragment>
                 <div className="row mt--40">
                   {this.blogList()}
                 </div>
             </Fragment>
        );
    }
}
export default AdminTeamList;