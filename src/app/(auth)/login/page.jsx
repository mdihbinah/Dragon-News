'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const handleLogInFunc = async(e) => {
        const {email, password} = e
        console.log(email, password);
        const { data, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
})
    }
    return (
        <div className='container mx-auto min-h-[85vh] flex justify-center items-center bg-slate-100' >
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-2">Login now</h1>
    </div>
    <form  onSubmit={handleSubmit(handleLogInFunc)} >
        <div className="card bg-base-100 min-w-80 shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="font-bold">Email:</label>
          <input type="email" name='email' className="input" placeholder="Email"
           {...register('email', { required: true })} />
          <label className="font-bold">Password:</label>
          <input type="password" name='password' className="input" placeholder="Password" {...register('password', { required: 'Password field is required' })} />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
          <div><a className="link link-hover text-green-400">Forgot password?</a></div>
          <button className="btn btn-neutral mt-2">Login</button>
          <p className='mt-1'>Don't have an account? <Link href={'/register'} className='link link-hover text-green-400'>Register</Link> </p>
        </fieldset>
      </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default LoginPage;