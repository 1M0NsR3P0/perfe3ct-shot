import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='md:flex items-center'>
      <div className='md:text-center bg-[#f4f1f1] text-[20px] h-[] py-5 '>
      <div className='flex md:flex-row flex-col justify-between  md:h-[200px] md:ml-36 md:px-[150px]'>
        <div className='w-[50%] px-[80px] md:text-center'>
          <h1 className='text-[27px] mb-4 font-semibold'>perfect-shots.com</h1>
          <p className='md:px-[10%] text-[12px] text-gray-500'>
          Whether you're a beginner looking to grasp the basics or an experienced photographer seeking to refine your skills, our photography course website is your gateway to unlocking your creative potential and capturing stunning images that tell compelling stories. Join us on this exciting journey and embark on a fulfilling photography learning experience.
          </p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 items-center md:text-left text-center w-[100%]'>

          <div className='md:px-[0%] px-[10%]'>
            <h1 className='text-[22px] md:text-[27px] md:text-left font-semibold'>Learn More</h1>
            <p className='text-left text-base pr-5'>96-15 Metropolitan Ave, Forest Hill, North Dakota, United States</p>
            <p className='text-sm text-left'>or</p>
            <p className='text-left text-base pr-5'>1015 S Greensboro Pike, New Castle, Iowa, United States</p>
          </div>
          <div className='flex justify-center md:flex-row items-center md:py-0 py-5'>
            <div className='text-left'>
              <div className='w-[100px]'><img src="https://i.ibb.co/Fw5tdn7/Picsart-23-06-07-15-27-11-522-1.jpg" alt="logo" /></div>
              <h1 className='text-[22px] text-left font-semibold'>
                <a href="/">Get Connected</a>
              </h1>
              <p className='text-base'>Follow Us</p>
              <div className='md:flex gap-2 justify-start items-center my-3'>
                <a href="https://www.facebook.com/naimon.chy" target="_blank"><img
                  className='w-[25px]'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn95Mb5k_ValMR-ACT3RcQGJhpCPZoWXl8YDbm_13vA&s'
                  alt='not found'
                /></a>
                <a href="https://www.twitter.com/naimonchy" target="_blank">
                  <img
                    className='w-[25px]'
                    src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png'
                    alt='not found'
                  />
                </a>
                <a href="https://www.instagram.com/naimonchy" target="_blank">
                  <img
                    className='w-[25px]'
                    src='https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg'
                    alt='not found'
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCStj-ORBZ7TGK1FwtGAUgbQ" target="_blank">
                  {/* i don't have a channel here! so.. */}
                  <img
                    className='w-[25px]'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzkbjGCYKY2UQeILfWe0bLFz51T1KstkqrjKribk&s'
                    alt='not found'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:h-[200px] h-auto bg-info pt-10 text-gray-600 px-5
       md:px-0'>
        <div className=''>
          <small>
            &copy; 2022 Yummy, All rights reserved. Powered by perFect-Shot team.
          </small>
        </div>
        <small className='md:flex justify-center mt-5'>
          <ul className='md:flex justify-center items-center'>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Sitemap</li>
          </ul>
        </small>
      </div>
    </div>
    </div>
  );
};

export default Footer;
