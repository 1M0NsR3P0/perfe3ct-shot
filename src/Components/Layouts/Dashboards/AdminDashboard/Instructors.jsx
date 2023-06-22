import React, { useEffect, useState } from 'react';
import fetchUsers from '../../CustomHook/LoadData';
import { Helmet } from 'react-helmet';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/')
      .then((data) => data.json())
      .then((data) => {
        const filteredInstructors = data.filter((ins) => ins.role === 'instructor');
        setInstructors(filteredInstructors);
        
      });
      const follow = ()=>{

      }
    }, []);
    // console.log(instructors)

  return (
    <div className="w-[95%]">
      <Helmet>
        <title>Perfect-Shot | Instructors</title>
      </Helmet>
      <div className="text-center text-xl font-semibold my-5">Our Instructors</div>
      <hr className="my-5" />
      <div className="overflow-x-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {instructors.map((inst) => (
          <div key={inst._id}>
            
            <div className="card w-[400px] h-[400px] bg-base-100 shadow-xl">
              <figure className="w-full h-[450px] object-fill">
                <img src={inst?.pic} className="" alt="Shoes" />
              </figure>
              <div className="card-body bg-green-300 h-[100%]">
                <h2 className="card-title text-[20px]">
                  {inst.name}
                  {/* TODO: this badge will show when a new course added */}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="text-sm flex items-center h-10">email: {inst.email}</div>
                <p className='text-sm'>{inst.bio.slice(0,100)}</p>
                <div className="card-actions justify-end">
                  <button onClick={()=>follow(inst._id)} className="badge text-xl flex items-center h-10">follow</button>
                  <div className="badge text-xl flex items-center h-10">popularity: {inst.popularity.vlaue}</div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
