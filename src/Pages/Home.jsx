import React from 'react';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <main className='grid grid-cols-12 gap-2 max-w-11/12 mx-auto mt-6'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6 '>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3' >
                    <RightAside></RightAside>
                </aside>
            </main>
    );
};

export default Home;