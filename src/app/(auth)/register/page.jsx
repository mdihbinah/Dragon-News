'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const handleLogInFunc = async(data) => {
        console.log(data, 'data');
        const {name, photolink, email, password} = data
        console.log(name, photolink, email, password);

        const {data:res, error} = await authClient.signUp.email({
          name: name, // required
          email: email, // required
          password: password, // required
          image: photolink,
          callbackURL: "/",
        })

        console.log(res, error);
    }

    return (
        <div className='container mx-auto mt-5 min-h-[85vh] flex justify-center items-center bg-slate-100' >
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-2">Register now!</h1>
    </div>
    <form  onSubmit={handleSubmit(handleLogInFunc)} >
        <div className="card bg-base-100 min-w-80 shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="font-bold">Name:</label>
          <input type="text" name='email' className="input" placeholder="name"
           {...register('name', { required: 'Name is Must' })} />
           {errors.name && (
            <p className='text-red-500' >{errors.name.message}</p>
           ) }

          <label className="font-bold">Photo Link:</label>
          <input type="text" name='email' className="input" placeholder="Photo Link"
           {...register('photolink', { required: 'Photo Link is Must' })} />
           {errors.photolink && (
            <p className='text-red-500' >{errors.photolink.message}</p>
           ) }

          <label className="font-bold">Email:</label>
          <input type="email" name='email' className="input" placeholder="Email"
           {...register('email', { required: 'Email is Must' })} />
           {errors.email && (
            <p className='text-red-500' >{errors.email.message}</p>
           ) }
          <label className="font-bold">Password:</label>
          <input type="password" name='password' className="input" placeholder="Password" {...register('password', { required: 'Password field is required' })} />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
          <button className="btn btn-neutral mt-2">Register</button>
        </fieldset>
      </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default RegisterPage;