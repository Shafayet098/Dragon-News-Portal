import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav';

const AuthLayout = () => {
    return (
        <div className='m-0 bg-base-200 h-screen'>
            <div className='max-w-11/12 pt-8'>
                <Nav></Nav>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;