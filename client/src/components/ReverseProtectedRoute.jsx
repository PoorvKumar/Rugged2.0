import React from 'react'
import { useAuthenticate } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ReverseProtectedRoute = () => {
    const { isAuthenticated }=useAuthenticate();

    return (isAuthenticated?<Navigate to={'/'} replace={true} />:<Outlet />);
}

export default ReverseProtectedRoute