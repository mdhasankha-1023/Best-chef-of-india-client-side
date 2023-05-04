import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();

    if(user){
        return children
    }
    return <Navigate to='/sign-in' state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;