
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TheInstructor from './TheInstructor';
import fetchUsers from '../../../../../Layouts/CustomHook/LoadData';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Parallax } from 'react-parallax';


// ..
AOS.init();
const PopularInstructors = () => {
    const [users] = fetchUsers()
    const initialSliceCount = 6;
    const popularUser = users
    ?.filter(usr => usr.students) 
    ?.sort((a, b) => b.students - a.students) 
    ?.slice(0, initialSliceCount);

    // console.log(users)
    return (
        <Parallax
        // blur={{ min: -50, max: 50 }}
        bgImage={"https://i.ibb.co/8jYV6nM/pexels-wendy-wei-2986305.jpg"}
        bgImageAlt="this is not supposed to happen...!!!"
        strength={-150}
        >
            <div className='w-[95%] mx-10 my-52 bg-slate-200 '>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper py-20">
    {
        popularUser.map(user =>
            <div className='flex justify-center items-center'>

                <SwiperSlide>
                    <div className='flex items-center gap-10'>
                        <div className='md:w-[45%]'>
                            <img className='h-[70vh] w-full rounded-full p-10' src={user?.pic} alt="" />
                        </div>
                        <div className='w-[50%]'>
                            <div className='text-black font-bold text-lg'>{user?.name}</div>
                            <div className='font-xs'> {user?.bio}</div>
                        </div>
                    </div>

                </SwiperSlide>
            </div>
        )
    }
</Swiper>
</div>
        </Parallax>
    );
};

export default PopularInstructors;