import React from 'react';
import SocilaLogin from './SocilaLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div>
                <SocilaLogin></SocilaLogin>
            </div>
            <div>
                <FindUs></FindUs>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightAside;