import React from 'react';
import { Outlet } from 'react-router-dom';
import Statiscs from '../Statiscs';

const AdminHome = () => {
    return (
        <div className='w-full'>
           <Statiscs></Statiscs>
        </div>
    );
};

export default AdminHome;