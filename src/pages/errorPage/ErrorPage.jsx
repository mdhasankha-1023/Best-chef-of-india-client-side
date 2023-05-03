import React from 'react';
import './ErrorPage.css'
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='error'>
            <p className='text-center text-danger position-absolute bottom-0 start-50 fs-2'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;