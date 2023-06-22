import React, { useContext } from 'react';
import { ProvideAuth } from '../Layouts/AuthProviders/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';

const SecretRoutes = ({ children }) => {
    const location = useLocation()
    const { user, userLoading } = useContext(ProvideAuth)
    // console.log(user, userLoading)
    if (userLoading) {
        // console.log('user is loading thats why it is loading');
        <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default SecretRoutes;