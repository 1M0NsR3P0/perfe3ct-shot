import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowClasses from './ShowClasses';
import Loading from '../../../Shared/Loading';
import FetchClasses from '../../CustomHook/FetchClasses';
import { Helmet } from 'react-helmet';
import fetchMyCourses from '../../CustomHook/MyAddedCourses';


const ManageClasses = () => {
  // const [classes, isLoading, refetch] = FetchClasses();
  const [classes, isLoading, refetch] = fetchMyCourses();
  // console.log(classes)
  return (
    <div className="w-[95%]" style={{overflowy:'scroll'}}>
      <Helmet>{isLoading?<title>loading</title>:<title>Perfect-Shot | Manage Classes</title>}</Helmet>
      <div className="text-center text-xl font-semibold my-5">Manage Your Courses</div>
      <hr className="my-5" />
      <div className="overflow-x-auto grid grid-cols-1 md:grid-cols-3 gap-10 overflow-y-scroll">
        {
          classes.map((cls,id) => <ShowClasses key={cls._id} cls={cls} obj={classes} id={id} refetch={refetch}></ShowClasses>)
        }
      </div>
    </div>
  );
};

export default ManageClasses;