// import React, { useState } from 'react';
import { Link } from 'react-router';

const Login = () => {
    // const { signIn } = use(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const [error, setError] = useState('')
    console.log(location)
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // signIn(email, password)
        //     .then(res => {
        //         console.log(res)
        //         navigate(location?.state || '/')
        //     }).catch(err => {
        //         console.log(err)
        //         const errorMessage = err.message;
        //         setError(errorMessage)
        //     })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  mx-auto mt-4 pt-4">
            <h1 className="text-center text-3xl font-bold">LogIn now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' required />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='text-red-400'>{'error'}</p>
                <p>If you are new, please <Link to={'/auth/register'} className='underline text-blue-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;