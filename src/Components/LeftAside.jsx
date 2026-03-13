import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';


const LeftAside = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json').then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])
    return (
        <div className=''>
            <h1 className='font-bold text-primary'>All Categories({categories.length})</h1>
            <div className='flex flex-col justify-center items-center'>
                {
                    categories.map(category=>
                    <NavLink className={'btn bg-white border-0 mb-1 text-accent hover:bg-slate-100 font-semibold w-full'} key={category.id}
                    to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;