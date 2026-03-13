import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from './Header';

const NewsDetails = () => {
    const {id} = useParams();
    console.log(id);
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='mt-2'>
            <Header></Header>
            
        </div>
    );
};

export default NewsDetails;