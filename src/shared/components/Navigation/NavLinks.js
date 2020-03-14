import React from 'react';
import {NavLink} from 'react-router-dom'

import './NavLinks.css';

const NavLinks = props => {

    return (
        <ul className="nav-links ">
            <li>
                <NavLink to="/" exact>Discover</NavLink>
            </li>
            <li>
                <NavLink to="/rooms">Rooms</NavLink>
            </li>
            <li>
                <NavLink to="/activities">Activities</NavLink>
            </li>
            <li>
                <NavLink to="/u1/profile">My profile</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;