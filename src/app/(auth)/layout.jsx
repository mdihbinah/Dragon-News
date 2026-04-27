import Navbar from '@/component/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const Authlayout = ({children}) => {
    return (
        <div className={`${montserrat}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Authlayout;