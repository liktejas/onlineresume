import React from 'react';
import Navbar from './Navbar';
import {ExpData} from './ProjectData';
import ExpComp from './ExpComp';
import {Helmet} from "react-helmet";

const Experience = () => {
    return (
        <>
            <Helmet>
                <title>Online Resume | Experience</title>
            </Helmet>
            <div className="exp_custom_body">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-12 offset-md-2">
                            <div className="exp_custom_card">
                                <h3 className="mb-4 basic_info">Experience & Certification</h3>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <ul className="timeline">
                                        {
                                            ExpData.map((current_val, index) =>{
                                                return <ExpComp key={index} title={current_val.title} year={current_val.year} desc={current_val.desc} />
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
