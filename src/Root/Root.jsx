import React from 'react';
import Header from '../Components/Header';
import Marquee from '../Components/Marquee';
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
                <div>
                    <Marquee></Marquee>
                </div>
                <div>
                    <Nav></Nav>
                </div>
            </header>
            <main>
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