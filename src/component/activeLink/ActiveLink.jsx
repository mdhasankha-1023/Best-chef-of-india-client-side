import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-bootstrap';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) => isActive ? 'active' : 'active' }>
                {children}
        </NavLink>
    );
};

export default ActiveLink;