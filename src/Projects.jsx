import React from 'react';
import Navbar from './Navbar';
import ProjectData, {ProjectData2} from './ProjectData';
import Accordion, {Accordion2} from './Accordion';
import {Helmet} from "react-helmet";

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Online Resume | Projects</title>
            </Helmet>
           <div className="projects_custom_body">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="projects_custom_card">
                                <h3 className="mb-4 basic_info">Projects</h3>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="accordion" id="accordionExample">
                                            {
                                                ProjectData.map((val, index) => {
                                                    return <Accordion key={index} id={val.id} title={val.title} language={val.language} desc={val.desc} link={val.link} />
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="accordion" id="accordionExample2">
                                            {
                                                ProjectData2.map((val, index) => {
                                                    return <Accordion2 key={index} id={val.id} title={val.title} language={val.language} desc={val.desc} link={val.link} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-12">
                                        <p className="text-center mt-3">OTHER PROJECTS ARE AVAILABLE ON <a href="https://github.com/liktejas" target="_blank" rel="noreferrer">GITHUB</a> ACCOUNT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
