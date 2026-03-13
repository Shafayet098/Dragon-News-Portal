
import { FaGithub } from 'react-icons/fa';
import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Context/AuthContext';

const SocilaLogin = () => {
    const {signInWithGoogle,signInWIthGithub} = use(AuthContext)

    const handleGoogleSignIn =()=>{
        signInWithGoogle().then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    const handleGitHubLogin=()=>{
        signInWIthGithub().then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div className='font-bold text-primary mb-2'>Login With</div>
            <div className='flex flex-col gap-1'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary'>
                    <FcGoogle size={25}></FcGoogle> Login With Google</button>
                <button onClick={handleGitHubLogin} className='btn btn-outline btn-primary'>
                    <FaGithub size={25}></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocilaLogin;