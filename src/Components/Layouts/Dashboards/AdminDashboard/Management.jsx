import React, { useContext, useEffect, useState } from 'react';
import fetchUsers from '../../CustomHook/LoadData';
import Users from './Users';
import { CircularProgress } from '@mui/material';
import { ProvideAuth } from '../../AuthProviders/AuthProvider';

const Management = () => {
  const {user} = useContext(ProvideAuth)
  const [users, isLoading, refetch] = fetchUsers();


  return (
    <div className="w-full" style={{overflowy:'scroll'}}>
      <div className="text-center text-xl font-semibold my-5">Manage Your Users And Instructors</div>
      <hr className="my-5" />
      <div className="overflow-x-auto">
        {isLoading ? (
          <p className='w-full h-[50vh] flex justify-center items-center'><CircularProgress/></p>
        ) : (
          <table className="table shadow-2xl">
            <thead>
              <tr>
                <th>userId</th>
                <th>Name</th>
                <th>Role</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map(user => <Users key={user._id} user={user} />)
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

export default Management;
