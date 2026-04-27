import BreakingNews from '@/component/shared/BreakingNews';
import Header from '@/component/shared/Header';
import Navbar from '@/component/shared/Navbar';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <main>
            {children}
            </main>
        </div>
    );
};

export default Mainlayout;