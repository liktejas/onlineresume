import React from 'react';

const ExpComp = (props) => {
    const text_decoration = {textDecoration: "none"}
    return (
        <>
            <li>
                <a href="#/" className="basic_info_content2 timeline_title">{props.title}</a>
                <br />
                <p className=" timeline_date" style={text_decoration}>{props.year}</p>
                <p className="basic_info_content2">{props.desc}</p>
            </li> 
        </>
    )   
}

export default ExpComp;
