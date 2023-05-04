import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader'

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();


    // set spinner
    if(loading){
        return <div className='position-absolute bottom-50 end-50'><PulseLoader/></div>
    }

    if(user){
        return children
    }
    return <Navigate to='/sign-in' state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;