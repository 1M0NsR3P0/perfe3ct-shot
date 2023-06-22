import React, { useContext, useState } from 'react';
import { ProvideAuth } from '../../Layouts/AuthProviders/AuthProvider';
import { useForm } from "react-hook-form";
import ParticlesBg from 'particles-bg';
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from "react-icons/ai";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Login = () => {
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate(null)
    // console.log(from,location)

    const [show, setShow] = useState(false)
    const {
        user,
        login,
        userLoading,
        googleLogin,
        githubLogin
    } = useContext(ProvideAuth)
    const [loading,setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const googleLoginHAndle = () => {
        setLoading(true)
        googleLogin()
        .then(data=>{
            setLoading(false)
                // console.log(data)
                navigate(from)
        })
        setLoading(false)
    }
    const gitHubLoginHAndle = () => {
        setLoading(true)
        githubLogin()
        .then(data=>{
            setLoading(false)
                // console.log(data)
                navigate(from)
        })
        setLoading(false)
    }
    const onSubmit = data => {
        setLoading(true)
        login(data.email, data.password)
            .then((data) => {
                Swal.fire(
                    'sucessfull!',
                )
                setLoading(false)
                // console.log(data)
                navigate(from, {replace:true})

            })
            .catch(err=>{
                setLoading(false)
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hero w-full h-[100vh] ">
            <Helmet><title>Perfect-Shot | Login</title></Helmet>
            <ParticlesBg type="thick" bg={true} />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-[550px] max-w-sm shadow-2xl h-full">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            <label className="label">
                                <span><button className='btn btn-link' onClick={() => setShow(!show)}>
                                    {!show ? <span className='flex'><AiFillEye></AiFillEye> show</span>
                                        : <span className='flex'><AiFillEyeInvisible></AiFillEyeInvisible> hide</span>}</button></span>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary flex items-center justify-center disabled">
                                {!loading ? <span>Login </span>
                                    : <span className='w-[70%]'><CircularProgress /></span>}
                            </button>
                        </div>
                        <span>don't have an account?<Link to="/register" className='btn btn-link btn-sm'>Signup here</Link></span>
                    </div>
                    <span className='flex flex-col'>
                        <button onClick={googleLoginHAndle} className='flex justify-center items-center py-2 gap-2'><img src="https://i.ibb.co/2NrpWDF/google.png" alt="google" className='w-[32px]' />
                            <span>Signup  with Google</span></button>
                        <button onClick={gitHubLoginHAndle} className='flex justify-center items-center py-2 gap-2'>
                            <img src="https://i.ibb.co/wW4Nn2q/github.png" alt="github" className='w-[32px]' />
                            <span>Signup with GitHub</span></button>
                    </span>
                </div>
            </div>
        </form>
    );
};

export default Login;