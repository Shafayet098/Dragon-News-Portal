import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegisterSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className='flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  mx-auto mt-4 pt-4">
                <h1 className='text-center text-2xl font-semibold'>Register Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleRegisterSubmit} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Name" required />
                        {/* {
                            nameError && <p className='text-red-400'>{nameError}</p>
                        } */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" name='photo' required />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='font-semibold'>Don't have an account? <Link className='text-secondary' to='/auth'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;