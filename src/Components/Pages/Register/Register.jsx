import { Button, CircularProgress, Icon } from '@mui/material';
import ParticlesBg from 'particles-bg';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { ProvideAuth } from '../../Layouts/AuthProviders/AuthProvider';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from "react-icons/ai";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const imgToken = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
    const imgUploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgToken}`
    const [show, setShow] = useState(false)
    const random = parseInt(Math.random(9547)*10000)
    const {
        err,
        user,
        createUser,
        googleLogin,
        githubLogin,
        update,
    } = useContext(ProvideAuth)
    const [imgURL, setIMGurl] = useState("null")
    // bg particles
    const num = (Math.floor((Math.random() * 11)));
    // react form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('')
        if (data.password !== data.confirm) {
            return setError('password did not match')
        }
        if (data.password.length < 6) {
            return setError("Your password must be at least 6 characters");
        }
        if (data.password.search(/[a-z]/i) < 0) {
            return setError("Your password must contain at least one letter.");
        }
        if (data.password.search(/[0-9]/) < 0) {
            return setError("Your password must contain at least one digit.");
        }
        if (data.password.search(/[A-Z]/i) < 0) {
            return setError("Your password must contain at least one capital letter.");
        }
        if(data.password.match("(?=.*[A-Z])(?=.*[@$!%*?&])")){
            return setError('not a valid password. try a strong passwd, include capital & small letter with number and a special character')
        }
        const formData = new FormData();
        formData.append('image', data.picture[0])
        // img uploading to database
        fetch(imgUploadUrl, {
            method: 'POST',
            body: formData
        })
            .then(data => data.json())
            .then(imgUrl => {
                console.log(imgUrl.data.display_url)
                setIMGurl(imgUrl.data.display_url)
            })
        //creating a new user
        setLoading(true)
        createUser(data.email, data.password)
            .then(datas => {
                if(imgURL!==null){
                    const name = data.username || "null";
                const url = imgURL ? imgURL : 'null'
                update(name, url)
                // console.log(name)
                const newUser = { name: name, email: data.email, role: "student", classes: [], pic: imgURL, specialization: '', experience: '', popularity: random, bio: '', contact: [],students:random }
                fetch(`http://localhost:5000/users/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),

                })
                    .then(data => data.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire(
                                'sucessfull!',
                            )
                            console.log(data)
                        }
                    })
                }
            })
            .catch(err => {
                if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setError("weak password, type strong password")
                    setLoading(false)
                    // console.log(error)
                }
                if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                    setError("Already Registered with this email. please log in")
                    setLoading(false)
                    // console.log(error)

                }
                else {
                    setError(err.message)
                    setLoading(false)
                }
            })

        setLoading(false)



    };
    const googleLoginHAndle = () => {
        setLoading(true)
        googleLogin()
            .then(result => {
                console.log(result.user)
                const user = result.user
                const newUser = { name: user.displayName, email: user.email, role: "student", classes: [], specialization: '', experience: '', popularity: random, bio: '', contact: [],students:random, pic:user.photoURL }
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),

                })
                    .then(data => {
                        // alert('im here')
                        console.log(data)
                        if(data.ok){
                            Swal.fire(
                                'sucessfull!',
                            )
                        }
                    })
                setLoading(false)

                // navigate(from)
            })
            .catch(err => {
                if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setError("weak password, type strong password")
                    // console.log(error)
                }
                if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                    setError("Already Registered with this email. please log in")
                    // console.log(error)
                }
                else { setError(err.message) }
            })


    }
    const gitHubLoginHAndle = () => {
        setLoading(true)
        githubLogin()
            .then(result => {
                console.log(result.user)
                const user = result.user
                const newUser = { name: user.displayName, email: user.email, role: "student", classes: [], specialization: '', experience: '', popularity: random, bio: '', contact: [],students:random, pic:user.photoURL }
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),

                })
                    .then(data => console.log(data))
                Swal.fire(
                    'success!'
                )
                setLoading(false)
                navigate(from)
            })
            .catch(err => {
                if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setError("weak password, type strong password")
                    // console.log(error)
                }
                if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                    setError("Already Registered with this email. please log in")
                    // console.log(error)
                }
                else { setError(err.message) }
            })
    }

    return (
        // const partcle = ["lines","thick", "cobweb", "tadpole"];

        <form onSubmit={handleSubmit(onSubmit)} className="hero w-full h-[100vh] ">
            <Helmet><title>Perfect-Shot | Register</title></Helmet>
            <ParticlesBg num={50} type='lines' bg={true} />
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl h-full">
                    <div className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input required type="text" placeholder="Name" className="input input-bordered" {...register("username", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Pic</span>
                            </label>
                            <input type="file" placeholder="Name" className="" {...register("picture", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type={show ? 'text' : 'password'} placeholder="Confirm" className="input input-bordered" {...register("confirm", { required: true })} />
                            <label className="label">
                                <span><button className='btn btn-link' onClick={() => setShow(!show)}>
                                    {!show ? <span className='flex'><AiFillEye></AiFillEye> show</span>
                                        : <span className='flex'><AiFillEyeInvisible></AiFillEyeInvisible> hide</span>}</button></span>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary flex items-center justify-center">
                                {!loading ? <span>Register </span>
                                    : <span className='w-[70%]'><CircularProgress /></span>}
                            </button>
                            <div className='text-red-400'>{err ? err : error}</div>
                        </div>
                        <span>already a member?<Link to="/login" className='btn btn-link btn-sm'>Login now</Link></span>
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

export default Register;