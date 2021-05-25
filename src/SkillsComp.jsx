import React from 'react';

const SkillsComp = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-4 col-md-4 col-4 basic_info_content extra_space mb-4">
                    <strong className="text-uppercase custom_bold">{props.title}:</strong>
                </div>
                <div className="col-sm-8 col-md-8 col-8 basic_info_content2">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={props.styleData} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsComp;
