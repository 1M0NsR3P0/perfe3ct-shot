import React from 'react';

import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../Pages/Home/Home/Home';
import Main from '../Pages/Body/Main';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import About from '../Pages/About';
import AdminDash from '../Layouts/Dashboards/AdminDashboard/AdminDash';
import AdminHome from '../Layouts/Dashboards/AdminDashboard/AdminHome';
import Management from '../Layouts/Dashboards/AdminDashboard/Management';
import ManageClasses from '../Layouts/Dashboards/InstructorDashboard/ManageClasses';
import ShowClasses from '../Layouts/Dashboards/InstructorDashboard/ShowClasses';
import InsDash from '../Layouts/Dashboards/InstructorDashboard/InsDash';
import InsHome from '../Layouts/Dashboards/InstructorDashboard/InsHome';
import AddCourses from '../Layouts/Dashboards/InstructorDashboard/AddCourses';
import Error from '../Error';
import Profile from '../Layouts/Dashboards/InstructorDashboard/Profile';
import ClassManagement from '../Layouts/Dashboards/AdminDashboard/ClassManagement';
import Instructors from '../Layouts/Dashboards/AdminDashboard/Instructors';
import EnrolledClasses from '../Layouts/Dashboards/UserDashboard/EnrolledClasses';
import MySelectedClasses from '../Layouts/Dashboards/UserDashboard/MySelectedClasses';
import Dashboard from '../Layouts/Dashboards/UserDashboard/Dashboard';
import Courses from '../Pages/Courses/Courses';
import SecretRoutes from '../PrivateRoutes/SecretRoutes';
import SingleClasses from '../Pages/Home/Home/HomeSections/PopularClassesSection/SingleClasses';
import TheInstructor from '../Pages/Home/Home/HomeSections/PopularInstructors/TheInstructor';
import Payments from '../Layouts/Dashboards/UserDashboard/Payment/Payments';
import UserStatics from '../Layouts/Dashboards/UserDashboard/UserStatics';
import Mycart from '../Layouts/CustomHook/Mycart';


export  const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/home',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/courses',
                    element:<Courses></Courses>
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/blog',
                    element:<About></About>
                },
                {
                    path:'/cart',
                    element:<SecretRoutes><MySelectedClasses></MySelectedClasses></SecretRoutes>
                },
                {
                    path:'/singleClasses/:id',
                    element:<SecretRoutes><SingleClasses></SingleClasses></SecretRoutes>
                },
                {
                    path:'/ourinstructors',
                    element:<SecretRoutes><Instructors></Instructors></SecretRoutes>
                },
                
            ]
        },
        {
            path:'admin',
            element:<SecretRoutes><AdminDash></AdminDash></SecretRoutes>,
            children:[
                {
                    path:'',
                    element:<AdminHome></AdminHome>
                },
                {
                    path:'dashboard',
                    element:<AdminHome></AdminHome>
                },
                {
                    path:'users',
                    element:<Management></Management>
                },
                {
                    path:'instructors',
                    element:<Instructors></Instructors>
                },
                {
                    path:'classes',
                    element:<ClassManagement></ClassManagement>
                },
                {
                    path:'settings',
                    element:<Profile></Profile>
                },
                {
                    path:"showclasses",
                    element:<ShowClasses></ShowClasses>
                }
            ]
        },
        {
            path:'instructor',
            element:<SecretRoutes><InsDash></InsDash></SecretRoutes>,
            children:[
                {
                    path:'',
                    element:<InsHome></InsHome>
                },
                {
                    path:'dashboard',
                    element:<InsHome></InsHome>
                },
                {
                    path:'add',
                    element:<AddCourses></AddCourses>
                },
                {
                    path:'classes',
                    element:<ManageClasses></ManageClasses>
                },
                {
                    path:'settings',
                    element:<Profile></Profile>
                },
                
            ]
        },
        {
            path:'dashboard',
            element:<SecretRoutes><Dashboard></Dashboard></SecretRoutes>,
            children:[
                {
                    path:'',
                    element:<UserStatics></UserStatics>
                },
                {
                    path:'cart',
                    element:<MySelectedClasses></MySelectedClasses>
                },
                {
                    path:'enrolled',
                    element:<EnrolledClasses></EnrolledClasses>
                },
                {
                    path:'checkout',
                    element:<Payments></Payments>
                },
                {
                    path:'settings',
                    element:<Profile></Profile>
                },
                
            ]
        },
        {
            path:'/*',
            element:<Error></Error>
        }



    ])