import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user} = useContext(AuthContext)

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoutes;