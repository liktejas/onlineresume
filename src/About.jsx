import React from 'react';
import profile from './img/tejas.jpg'
import Navbar from './Navbar';
import BasicInfo from './BasicInfo';
import {BasicInfoData} from './ProjectData';
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <title>Online Resume</title>
            </Helmet>
            <div className="custom_body">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12 text-center img_div">
                            <img className="rounded-circle z-depth-2 zoom" alt="100x100" src={profile} />
                            <h1 className="text-white namenposition mt-4">Tejas Sonawane</h1>
                            <h6 className="text-white namenposition">Full Stack Developer</h6>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className="custom_card">
                                <h3 className="mb-4 basic_info">Basic Information</h3>
                                
                                {
                                    BasicInfoData.map((current_val, index) => {
                                        return <BasicInfo key={index} title={current_val.title} data={current_val.data}/>
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default About;
