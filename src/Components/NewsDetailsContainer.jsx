import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from './Header';
import RightAside from './RightAside';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetailsContainer = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const news = data.find(item=>item.id===id)
    console.log(news);
    return (
        <div className='mt-2'>
            <Header></Header>
            <div className='grid grid-cols-12 gap-4 max-w-11/12 mx-auto mt-3'>
                <div className='col-span-9'>
                   <NewsDetailsCard news={news}></NewsDetailsCard>
                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </div>

            
        </div>
    );
};

export default NewsDetailsContainer;