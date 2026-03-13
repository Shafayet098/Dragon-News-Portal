import React from 'react';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const Home = () => {
    const navigation = useNavigation();
     if(navigation.state=='loading'){
        return <Loading></Loading>
    }
    return (
        <main className='grid grid-cols-12 gap-2 max-w-11/12 mx-auto mt-6'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6 '>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky h-fit top-0' >
                    <RightAside></RightAside>
                </aside>
            </main>
    );
};

export default Home;