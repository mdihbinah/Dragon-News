import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        
       <div className="">
        <h1 className="text-2xl font-bold">All categories:</h1>
            <ul className="flex flex-col gap-3">
            {
                categories.map(category => {
                return <li className={` ${category.category_id == activeId ? 'bg-green-300' : 'bg-slate-200'} rounded-md font-bold text-center text-sm`} key={category.category_id}><Link className='block p-2' href={`/categories/${category.category_id}`}>{category.category_name}</Link></li>
                })
            }
            </ul>
       </div>
    );
};

export default LeftSideBar;