import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


const Header = () => {
    const d = new Date()
    const option = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        
    }
    const date = d.toLocaleDateString('en-US', option)
    
    return (
        <div className='text-center py-5 space-y-1'>
            <Image src={logo} width={400} height={100} alt='logo' className='mx-auto' ></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE, MMMM dd yyyy")}</p>
        </div>
    );
};

export default Header;