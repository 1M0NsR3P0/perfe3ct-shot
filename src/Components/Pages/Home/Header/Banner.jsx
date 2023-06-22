import React from 'react';
import SwipperSlider from './SwipperSlider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Banner = () => {
    return (
        <div className='w-full '>
            <SwipperSlider></SwipperSlider>
        </div>
    );
};

export default Banner;