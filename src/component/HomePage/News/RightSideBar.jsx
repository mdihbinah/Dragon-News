import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2>Login with</h2>
            <div className="flex flex-col gap-3">  
            <button className='btn border-blue-500 text-blue-500'><FaGoogle></FaGoogle> Login with google</button>
            <button className='btn border-blue-500 text-blue-500'><FaGithub></FaGithub>Login with github</button>
            </div>
        </div>
    );
};

export default RightSideBar;