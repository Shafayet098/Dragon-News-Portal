import React from 'react';
import swimmingImg from '../assets/swimming.png'
import playgroundImg from '../assets/playground.png'
import classImg from '../assets/class.png'

const Qzone = () => {
    return (
        <div className='bg-slate-200 p-5 space-y-5'>
            <h1 className='text-xl font-bold'>Q-Zone</h1>
            <img src={swimmingImg} alt="" />
            <img src={playgroundImg} alt="" />
            <img src={classImg} alt="" />
        </div>
    );
};

export default Qzone;