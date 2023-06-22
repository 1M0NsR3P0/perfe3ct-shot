import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FetchClasses from '../../../../../Layouts/CustomHook/FetchClasses';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

AOS.init();

const PopularClasses = () => {
  const [classes] = FetchClasses();
  const initialSliceCount = 6;
  const popularClasses = classes
    ?.filter(cls => cls.popularity)
    ?.sort((a, b) => b.popularity - a.popularity)
    ?.slice(0, initialSliceCount);


  return (
    <Parallax
      bgImage={"https://i.ibb.co/2kfQsKz/pexels-photo-2376991.jpg"}
      bgImageAlt="this is not supposed to happen...!!!"
      strength={-150}
    >

      <div data-aos="fade-up" data-aos-duration="500" className=' w-full md:px-[100px] md:my-[100px] my-[50px]'>
        <div>
          <h1 data-aos="slide-left" data-aos-duration="1000" className='text-black text-4xl p-2 my-[100px] mx-[50px] md:my-[50px] md:mx-[0px] text-center font-bold border-b-2 w-full'>Our Popular Courses</h1>
        </div>
        <div data-aos="slide-right" data-aos-duration="1000" className='grid md:grid-cols-3 grid-cols-1 gap-10 shadow-lg box-border justify-center md:justify-between items-center'>
          {popularClasses.map(cls =>
            <div key={cls?._id} className="card card-compact md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] shadow-xl bg-white">
              <figure className='w-full h-[200px]'><img src={cls?.thumbnail} alt="Shoes" /></figure>
              <div className={`card-body ${cls.seats <= 0 ? 'bg-red-300' : ''}`}>
                <h2 className="card-title">{cls?.title}</h2>
                <div>Instructor: {cls?.instructorName}
                  <div className='flex justify-between items-center '>
                    <div>ratings: {cls?.ratings}</div>
                    <div>popularity: {typeof (cls?.popularity) === 'number' ? cls?.popularity : parseInt(cls?.popularity)}</div>
                    <div className='font-semibold text-xl'>price: {cls?.price <= 0 ? <span className='text-success font-bold text-2xl'>Free</span> : cls.price}$</div>
                  </div>
                  <div className='flex justify-between items-center '>
                    <div> Available Seats: <span className='text-base font-bold'>{cls?.seats}</span></div>
                    <div className='font-semibold text-xl'>Enrolled: {cls?.students <= 0 ? <span className='text-info font-bold text-2xl'>none</span> : cls.students}</div>
                  </div>
                  {cls?.seats >= 0 ? '' : <div className='text-error'>more available seats coming soon..</div>}
                </div>
                <div className="card-actions justify-end relative">
                  <Link to={`/singleClasses/${cls._id}`} className="btn">show more</Link><br />
                </div>
              </div>
            </div>
          )}
        </div>
        {classes.length > initialSliceCount && (
          <div className="text-end my-5">
            <button className='btn btn-outline btn-sm'><Link to="/courses">Show All</Link></button>
          </div>
        )}
      </div>
    </Parallax>
  );
};

export default PopularClasses;
