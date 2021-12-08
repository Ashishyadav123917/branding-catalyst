import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: true
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ modalState: !this.state.modalState });
    }

    render() {
        return (
            <div>
                <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{borderBottom: "0px solid #dee2e6"}}>
                                <h5 className="modal-title">
                                    Welcome!!!<br/><br/>
                                    Glad you turned up on this page.<br/>
                                    Book a free consultation with our team and our experts will guide you through the process.
                                    <br/>
                                    Get in touch with us<br/>

                                    </h5>

                                <button type="button" className="close" onClick={this.handleShow}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-footer align-items-center" style={{borderTop: "0px solid #dee2e6"}}>
                                <a href="/contact" className="rn-btn ">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup