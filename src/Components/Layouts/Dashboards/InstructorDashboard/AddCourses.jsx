import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { ProvideAuth } from '../../AuthProviders/AuthProvider';
import fetchUsers from '../../CustomHook/LoadData';

const AddCourses = () => {
    const { user } = useContext(ProvideAuth)
    const [imgUrl, setIMGurl] = useState('');
    const imgToken = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
    const imgUploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgToken}`;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.thumbnail[0]);

        try {
            const response = await fetch(imgUploadUrl, {
                method: 'POST',
                body: formData,
            });

            const imgResponse = await response.json();
            const imgUrl = imgResponse.data.display_url;
            setIMGurl(imgUrl);
            const popularity = parseInt(Math.random(500)*100)
            const AddCourse = {
                title: data.title,
                email: user.email,
                description: data.description,
                duration: data.duration,
                instructorName: data.instructorName,
                instructorEmail: data.instructorEmail,
                thumbnail: imgUrl,
                // this value will change if err
                price: parseInt(data.price),
                ratings: '',
                seats: data.seats,
                students: 0,
                status: 'pending',
                requirements: data.requirements,
                feedback:'',
                popularity:popularity
            };

            const courseResponse = await fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(AddCourse),
            });

            const courseData = await courseResponse.json();

            if (courseData.insertedId) {
                Swal.fire('Success!');
                // console.log(courseData);
            }
        } catch (error) {
            alert(error);
        }
    };
    return (
        <>
            <Helmet><title>Perfect-Shot | Add A Course</title></Helmet>
            {!user?.role==='instructor'?<div>loading..</div>:<div className='flex flex-col justify-center items-center w-full'>
                <div className='mb-10 text-3xl font-bold'><h1>Add a New Course</h1></div>
                <form className="w-full flex justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <div className='flex w-full'>
                        <div className='w-full'>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Title</span>
                                </label>
                                <input  {...register("title", { required: true })} type="text" placeholder="Title" className="input input-bordered w-[350px] ml-10" />
                            </div>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Description</span>
                                </label>
                                <input {...register("description", { required: false })} type="text" placeholder="add more Details" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Duration</span>
                                </label>
                                <input {...register("duration", { required: true })} type="number" placeholder="Duration in days" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Seats</span>
                                </label>
                                <input {...register("seats", { required: true })} type="number" placeholder="Total Available Seats" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input {...register("instructorName", { required: true })} type="text" placeholder="Name of Instructor" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Cover Photo</span>
                                </label>
                                <input {...register("thumbnail", { required: false })} type="file" placeholder="Add A Pic" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                            <div className="form-control w-[55%]">
                                <label className="label ml-10">
                                    <span className="label-text">Requirements</span>
                                </label>
                                <input {...register("requirements", { required: false })} type="text" placeholder="requirements" className="input input-bordered w-[350px] ml-10 " />
                            </div>
                        </div>
                    </div>
                                <div className='flex justify-center items-center gap-8 my-5'>
                                    <button className='btn btn-success' onClick={onSubmit}>Add Course{ }</button>
                                    <button className='btn btn-error' type='reset'>reset</button>
                                </div>
                    </div>
                </form>
            </div>}
        </>
    );
};

export default AddCourses;