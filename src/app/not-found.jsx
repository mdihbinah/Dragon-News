import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 h-[100vh]'>
            <h1 className='text-2xl font-bold text-red-500'>The Page is Not Found</h1>
            <Link href={'/'} ><button className='btn bg-red-600'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;