import React from 'react';
import user from './../assets/user.png'
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className="flex justify-center items-center relative">
            <div className=""></div>
            <div className="nav flex gap-5 text-accent">
                <NavLink className={({isActive})=>isActive && 'underline'} to="/">Home</NavLink>
                <NavLink className={({isActive})=>isActive && 'underline'} to="/about">About</NavLink>
                <NavLink className={({isActive})=>isActive && 'underline'} to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5 absolute right-0">
                <img src={user} alt="" />
                <button className="btn btn-primary px-10 ">Login</button>
            </div>
        </div>
    );
};

export default Nav;