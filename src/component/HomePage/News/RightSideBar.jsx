"use client"
import { authClient } from '@/lib/auth-client';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {

    const handleGoogleSignIn = async() => {
        const data = await authClient.signIn.social({
    provider: "google",
    })
}   
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
        provider: "github"
    })
}


    return (
        <div>
            <h2>Login with</h2>
            <div className="flex flex-col gap-3">  
            <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn} ><FaGoogle></FaGoogle> Login with google</button>
            <button className='btn border-blue-500 text-blue-500' onClick={handleGithubSignIn} ><FaGithub></FaGithub>Login with github</button>
            </div>
        </div>
    );
};

export default RightSideBar;