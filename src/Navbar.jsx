import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="custom_navbar">
                <NavLink exact activeClassName="active" to="/" className="custom_navbar_item text-center">About</NavLink>
                <NavLink exact activeClassName="active" to="/skills" className="custom_navbar_item text-center">Skills</NavLink>
                <NavLink exact activeClassName="active" to="/projects" className="custom_navbar_item text-center">Projects</NavLink>
                <NavLink exact activeClassName="active" to="/experience" className="custom_navbar_item text-center">Experience</NavLink>
            </div>
        </>
    )
}

export default Navbar;
