// import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';

const NewsContainer = () => {
    const { id } = useParams();
    console.log(id);
    const [news, setNews] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        setNews(data)
        if (id == 0) {
            setNews(data)
        }
        else if(id==1){
            const items=data.filter(item=>item.others.is_today_pick===true)
            setNews(items)
        }
        else{
            const items = data.filter(item=>item.category_id==id)
            setNews(items)
        }
    }, [id])

    console.log(data)

    return (
        <div className='pr-2'>
            <h1 className='font-bold mb-4 text-primary'>Total News : <span >{news.length}</span></h1>
            <div className='grid grid-cols-1 gap-4'>
                {
                    news.map(singleNews => <NewsCard 
                        key={singleNews.id} 
                        singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsContainer;