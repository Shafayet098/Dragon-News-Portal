import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    return (
        <div>
            <img className='object-cover rounded-t-md w-full h-[250px]' src={news?.image_url} alt="" />
            <h1 className='font-bold text-xl pt-5'>{news.title}</h1>
            <p>{news.details}</p>
            <Link  to={`/categories/${news.category_id}`} className='btn btn-secondary mt-4'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;