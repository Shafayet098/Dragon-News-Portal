import React from 'react';
import Header from '../Components/Header';
import Marquee from '../Components/Marquees';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';

const Root = () => {
    return (
        <div>
            <header className='mt-2'>
                <div>
                    <Header></Header>
                </div>
                <section className='max-w-11/12 mx-auto'>
                    <div className='mt-1 '>
                        <Marquee></Marquee>
                    </div>
                    <div className='mt-4'>
                        <Nav></Nav>
                    </div>
                </section>
            </header>
            <main classname>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section>
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;