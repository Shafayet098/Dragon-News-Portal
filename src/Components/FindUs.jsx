import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold '>Find Us On</h1>
            <div className="join join-vertical mt-4 flex flex-col w-full">
                <button className="btn justify-start join-item bg-base-100">
                    <FaFacebook></FaFacebook> Facebook</button>
                <button className="btn justify-start join-item bg-base-100">
                    <FaTwitter></FaTwitter> Twitter</button>
                <button className="btn justify-start join-item bg-base-100">
                    <FaInstagram></FaInstagram> Instragram</button>
            </div>

        </div>
    );
};

export default FindUs;