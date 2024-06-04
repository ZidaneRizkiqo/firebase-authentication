import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ element }) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (currentUser) {
        const from = location.state?.from?.pathname || "/dashboard";
        return <Navigate to={from} />;
    }

    return element;
};

export default PublicRoute;
