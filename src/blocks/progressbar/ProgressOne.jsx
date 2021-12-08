import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressOne = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            <div className="single-progress">
                <h6 className="title">Designing</h6>
                <ProgressBar now={props.designing} />
                <span className="label">{props.designing}%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Managment</h6>
                <ProgressBar now={props.management} />
                <span className="label">{props.management}%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Marketing</h6>
                <ProgressBar now={props.marketing} />
                <span className="label">{props.marketing}%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Development</h6>
                <ProgressBar now={props.development} />
                <span className="label">{props.development}%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressOne
