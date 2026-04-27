import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useraveter from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-2 container mx-auto mt-5'>
            <div className=""></div>
            <ul className='flex items-center gap-3 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <ul className='flex items-center gap-2'>
                <Image src={useraveter} alt='User Aveter' width={40} height={40}></Image>
                <button className='btn btn-accent'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </ul>
        </div>
    );
};

export default Navbar;