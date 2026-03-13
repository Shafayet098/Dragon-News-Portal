import React from 'react';
import dateFormat from "dateformat";
import logo from './../assets/logo.png'
import Theme from './Theme';

const Header = () => {
    return (
        <div className=" relative flex justify-center flex-col items-center gap-3 ">
            <img className="w-[400px]" src={logo} alt="" />
            <p className="text-accent">Journalism Without Fear or Favour</p>

            <div className="">
                <p className="font-semibold text-accent">
                    {dateFormat("Jun 9 2007", "fullDate")}
                </p>
                <div className="absolute  right-16 top-8">
                    <Theme></Theme>
                </div>
            </div>

        </div>
    );
};

export default Header;