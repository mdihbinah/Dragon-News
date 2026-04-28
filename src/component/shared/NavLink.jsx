'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname()

    return (
        <Link className={`${pathname == href ? 'text-green-400 border-b-2': ''}`} href={href} >{children}</Link>
    );
};

export default NavLink;