import React from 'react';
import Navbar from './Navbar';
import {SkillsData, SkillsData2} from './ProjectData';
import SkillComp from './SkillsComp';
import {Helmet} from "react-helmet";

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Online Resume | Skills</title>
            </Helmet>
            <div className="skills_custom_body">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="skills_custom_card">
                                <h3 className="mb-4 basic_info">Technical Skills</h3>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        {
                                            SkillsData.map((current_val, index) =>{
                                                return <SkillComp key={index} title={current_val.title} styleData={current_val.styleData}/>
                                            })
                                        }
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        {
                                            SkillsData2.map((current_val, index) =>{
                                                return <SkillComp key={index} title={current_val.title} styleData={current_val.styleData}/>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-center mt-4"><span className="custom_bold">Basic Knowledge of:</span> Node JS, Express JS, React JS, WordPress.</p>
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

export default Skills;
