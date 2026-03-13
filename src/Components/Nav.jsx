import React, { use } from 'react';
import profile from './../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Nav = () => {
    const {user,logOut} = use(AuthContext);
    console.log(user)
    const handleLogOut=()=>{
        logOut()
    }
    return (
        <div className="flex justify-center items-center relative">
            <div className="absolute left-0">
                <p className='text-accent'>{user?.email}</p>
            </div>
            <div className="nav flex gap-5 text-accent">
                <NavLink className={({ isActive}) =>
                     isActive ? "underline" : ""} to="/">Home</NavLink>
                <NavLink className={({ isActive}) =>
                     isActive ? "underline" : ""} to="/about">About</NavLink>
                <NavLink className={({ isActive}) =>
                     isActive ? "underline" : ""} to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-5 absolute right-0">
                <img className='w-12 rounded-full' src={user?.photoURL || profile} alt="" />
               {
                user?<button onClick={handleLogOut} className="btn btn-primary px-10 ">LogOut</button>
                :
                <Link to={'/auth'}> <button  className="btn btn-primary px-10 ">Login</button></Link>
               }
            </div>
        </div>
    );
};

export default Nav;