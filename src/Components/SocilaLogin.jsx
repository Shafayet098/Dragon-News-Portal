import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocilaLogin = () => {
    return (
        <div>
            <div className='font-bold text-primary mb-2'>Login With</div>
            <div className='flex flex-col gap-1'>
                <button className='btn btn-outline btn-secondary'>
                    <FcGoogle size={25}></FcGoogle> Login With Google</button>
                <button className='btn btn-outline btn-primary'>
                    <FaGithub size={25}></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocilaLogin;