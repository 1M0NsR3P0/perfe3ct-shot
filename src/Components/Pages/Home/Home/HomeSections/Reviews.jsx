import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
AOS.init();

const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(response => response.json())
            .then(data => setReview(data));
    }, []);
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage="bg.svg"
            bgImageAlt="this is not supposed to happen...!!!"
            strength={-150}
        >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper py-20 justify-center">

                <div className='grid grid-cols-2 min-h-[500px] lg:min-h-[900px] gap-y-[10px] w-full justify-center items-center'>
                    {review?.map(rvw => (
                        <SwiperSlide
                            centeredSlides={true}
                        >
                            <div className="w-full">
                                <div className="hero bg-contain ">
                                    <div className="hero-overlay bg-opacity-60 "></div>
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="max-w-xl">
                                            <h1 className="mb-5 md:text-[22px] text-[24px] font-bold uppercase">{rvw?.name}</h1>
                                            <p className="mb-5 text-xl">{rvw?.details}</p>
                                            <div>
                                                <Rating
                                                    emptySymbol={<AiOutlineStar className="icon" />}
                                                    fullSymbol={<AiFillStar className="icon" />}
                                                    initialRating={rvw?.rating}
                                                    readonly
                                                />


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </Parallax>
    );
};

export default Reviews;
