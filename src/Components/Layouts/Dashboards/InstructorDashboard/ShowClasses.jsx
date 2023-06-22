import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const ShowClasses = ({ cls, refetch, obj, id }) => {
  // const [refetch]
  // console.log(obj.length,id)
  const [newDetails, setNewDetails] = useState(cls?.description)
  useEffect(() => {
    setNewDetails(cls?.description.slice(0, 100) + '...see more')
  }, [])
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/classes/delete/${id}`, {
      method: 'DELETE'
    })
      .then(data => {
        if (data) {
          Swal.fire('deleted succesfully')
        }
        refetch()

      })
  }

  return (
    <>
      <Helmet><title>Perfect-SHot | Show Classes</title></Helmet>
      <div style={{ overflowy: 'scroll' }} className={`card w-96 bg-base-100 shadow-xl h-[500px] `}>
        <figure className='w-full h-[450px] object-fill'><img src={cls?.thumbnail} className='' alt="Shoes" /></figure>
        
        <div className={`card-body ${cls?.status === 'rejected' ? 'bg-red-400' : 'bg-slate-100'}  h-[100%]`}>
          <h2 className="card-title text-[18px]">
            {cls?.title}
            
            {/* TODO: this badge will show when a new course added not according to date. cause we didn't added date to the database. we will do it according to arrays last objec.*/}
            { obj.length === id+1? <div className="badge badge-secondary">NEW</div> :'' }
          </h2>

          {cls?.status ==='rejected' ? <div className=' font-bold mb-2'><span className='text-black p-3 text-center '>status: Rejected<br/><span>{cls?.feedback}</span></span></div> : ''}
      {cls?.status ==='pending' ? <div className=' font-bold '><span className='text-blue-400 badge p-3 text-center '>status: pending</span></div> : ''}
      {cls?.status ==='approved' ? <div className=' font-bold '><span className='text-green-400 badge p-3 text-center '>status: Approved | Live</span></div> : ''}

          <p>{cls?.description ? newDetails : 'No Details provided Yet'}</p>
          <div className="card-actions justify-center w-full">
            <div className="badge text-xl flex items-center h-10">Rating: {cls?.rating}</div>
            <div className="badge text-xl flex items-center h-10">price: {cls?.price <= 0 ? <span className='text-success text-2xl'>Free</span> : <span>{cls?.price}$</span>}</div>
          </div>
          <button className='btn btn-outline' onClick={() => handleDelete(cls?._id)}>delete</button>
        </div>
      </div>

    </>
  );
};

export default ShowClasses;
