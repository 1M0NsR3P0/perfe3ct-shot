import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import fetchUsers from '../../../../../Layouts/CustomHook/LoadData';

AOS.init();



const Instructors = () => {
    const [users] = fetchUsers();
    const onlyInstructors = users.filter(usr=>usr.role==='admin')
    
    return (
        <div data-aos="fade-up" data-aos-duration="500" className='w-full md:px-[100px] md:my-[100px] my-[50px]'>
      <div>
        <h1 data-aos="slide-left" data-aos-duration="1000" className='text-black text-4xl p-2 my-[100px] mx-[50px] md:my-[50px] md:mx-[0px] text-center font-bold border-b-2 w-full'>Our Popular Courses</h1>
      </div>
      <div data-aos="slide-right" data-aos-duration="1000" className='grid md:grid-cols-3 grid-cols-1 gap-5 shadow-lg box-border justify-center md:justify-between items-center'>
        {users.map(cls =>
          <div key={cls?._id} className="card card-compact md:w-[400px] md:h-[450px] bg-base-100 shadow-xl">
            <figure className='w-full h-[200px]'><img src={cls?.thumbnail} alt="Shoes" /></figure>
            <div className={`card-body ${cls.seats <= 0 ? 'bg-red-300' : ''}`}>
              <h2 className="card-title">{cls?.title}</h2>
              <div>Instructor: {cls?.instructorName}
                <div className='flex justify-between items-center '>
                  <div>ratings: {cls?.ratings}</div>
                  <div>popularity: {typeof(cls?.popularity)==='number'?cls?.popularity:parseInt(cls?.popularity)}</div>
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
    );
};

export default Instructors;