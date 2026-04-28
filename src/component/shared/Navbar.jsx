'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useraveter from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    console.log('user', user);
    return (
        <div className='flex justify-between items-center gap-2 container mx-auto mt-5'>
            <div className=""></div>
            <ul className='flex items-center gap-3 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            { isPending ? (<span className="loading loading-spinner loading-xl text-success"></span>) :
              user ? (<ul className='flex items-center gap-2'>
                    <h1>Hello, {user?.name}</h1>
                    <Image 
                    src={user?.image || useraveter} alt='User Aveter' width={40} height={40} className='rounded-full' ></Image>
                    <button className='btn btn-accent' onClick={async() => { await authClient.signOut() }}>LogOut
                    </button>
                </ul>) :  (
                    <button className='btn btn-accent'>
                        <Link href={'/login'}>Log In</Link>
                    </button>
                )
            }
        </div>
    );
};

export default Navbar;