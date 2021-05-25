import React from 'react';

const BasicInfo = (props) => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-sm-4 col-md-4 col-12 basic_info_content extra_space"><strong className="text-uppercase custom_bold">{props.title}</strong></div>
                <div className="col-sm-8 col-md-8 col-12 basic_info_content2">{props.data}</div>
            </div>
        </>
    )
}

export default BasicInfo;
