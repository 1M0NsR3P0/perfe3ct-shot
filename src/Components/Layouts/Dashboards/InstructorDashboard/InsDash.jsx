import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InsDash = () => {
    return (
        <div style={{height:'100vh',backgroundImage:'url("bg.svg")'}} className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {
            <Outlet></Outlet>
          }
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/instructor/dashboard"> Dashboard</Link></li>
            <li><Link to="/instructor/classes">Manage Classes</Link></li>
            <li><Link to="/instructor/add">Add A Course</Link></li>
            <li><Link to="/instructor/settings" title='comming soon..'> Settings</Link></li>
            <li><Link to="/">Home Page</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default InsDash;