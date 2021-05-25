import React from 'react';

const accordion = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-header" id="p1">
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left basic_info_content2" type="button" data-toggle="collapse" data-target={"#"+props.id} aria-expanded="true" aria-controls={props.id}>
                        <b>{props.title}</b>
                        </button>
                    </h2> 
                </div>
                <div id={props.id} className="collapse" aria-labelledby="p1" data-parent="#accordionExample">
                    <div className="card-body">
                        <p><b>Coded in {props.language}</b></p>
                        <p className="text-justify description">{props.desc}</p> <b>Github</b>: <a href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

const Accordion2 = (props) =>{
    const title = "House Pricing Prediction";
    return (
        <>
            <div className="card">
                <div className="card-header" id="p1">
                    <h2 className="mb-0">
                        <button className="btn btn-block text-left basic_info_content2" type="button" data-toggle="collapse" data-target={"#"+props.id} aria-expanded="true" aria-controls={props.id}>
                        <b>{props.title}</b>
                        </button>
                    </h2> 
                </div>
                <div id={props.id} className="collapse" aria-labelledby="p1" data-parent="#accordionExample2">
                    <div className="card-body">
                        <p><b>Coded in {props.language}</b></p>
                        <p className="text-justify description">{props.desc}</p> <b>Github</b>: <a href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
                        {
                            (props.title === title) ? <><br /><b>Github</b>: <a href="https://github.com/liktejas/House-Pricing-Prediction-Web-Version" target="_blank" rel="noreferrer">https://github.com/liktejas/House-Pricing-Prediction-Web-Version (Web Version)</a><br/><b>Live Link</b>: <a href="https://hpp-liktejas.herokuapp.com" target="_blank" rel="noreferrer">https://hpp-liktejas.herokuapp.com</a></> : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default accordion;
export {Accordion2};
