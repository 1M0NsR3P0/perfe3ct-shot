import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchClasses from '../../../../../Layouts/CustomHook/FetchClasses';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const SingleClasses = () => {
  const { id } = useParams();
  const [classes] = FetchClasses();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const thisClass = classes?.filter((cls) => cls._id === id);
    setDetails(thisClass[0]);
  }, []);
  const handleADDCart = id =>{
    
  }

  return (
    <div className='h-[100vh] w-full'>
      <div className='text-center text-4xl text-black font-semibold underline'>About This Course</div>
      <div>
        <div className='flex justify-center items-center my-20'>
          <div className='flex justify-center items-center w-[200px] md:w-[800px]'>
            <img className='object-fill' src={details?.thumbnail} alt="none" />
          </div>
        </div>
        <hr />
        <div className='flex justify-center my-10'>
          <div className='flex justify-center w-[50%]'>
            <div className='w-[1200px] font-bold'>
              <p className='my-5'>Title: {details?.title}</p>
              <p className='my-5'>Instructor: {details?.instructorName}</p>
              <p className='my-5'>Price: {details?.price}</p>
              <p className='my-5'>Seats available: {details?.seats}</p>
            </div>
            <div className='px-[100px] max-w-[800px] font-bold'>
              <p className='text-start font-normal my-5'>Details: {details?.description}</p>
              <p className='my-5'>Rating: {details?.ratings}</p>
              <p className='my-5'>Duration: {details?.duration}</p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <div>
            <button className='btn' onClick={()=>handleADDCart(details._id)}>Add to Cart</button>
            <div className='mt-5'>
              <Rating
                emptySymbol={<AiOutlineStar className="icon" />}
                fullSymbol={<AiFillStar className="icon" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClasses;
