import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { ProvideAuth } from '../../AuthProviders/AuthProvider';
import FetchClasses from '../../CustomHook/FetchClasses';
import EditClasses from './EditClasses';


const ClassManagement = () => {
    const {user} = useContext(ProvideAuth)
    const [classes, isLoading, refetch] = FetchClasses();
    // console.log(classes)
    return (
        <div className="w-full " style={{overflowy:'scroll'}}>
      <div className="text-center text-xl font-semibold my-5">Manage Your Users And Instructors</div>
      <hr className="my-5" />
      <div className="overflow-x-auto">
        {isLoading ? (
          <p className='w-full h-[50vh] flex justify-center items-center'><CircularProgress/></p>
        ) : (
          <table className="table shadow-2xl">
            <thead className='w-full'>
              <tr className='w-[500px] bg-red-500'>
                <th>userId</th>
                <th>Title</th>
                <th>Role</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {classes.length > 0 ? (
                classes.map(cls => <EditClasses key={cls._id} cls={cls} />)
              ) : (
                <tr>
                  <td colSpan="4">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
    );
};

export default ClassManagement;