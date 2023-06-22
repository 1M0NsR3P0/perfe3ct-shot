
// import ActiveLink from '../PrivateRoutes/ActiveLink';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { ProvideAuth } from '../Layouts/AuthProviders/AuthProvider';
import ActiveLink from './ActiveLink';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import fetchUsers from '../Layouts/CustomHook/LoadData';
const Navbar = () => {
    const { userLoading, user, logout,getMyCart } = useContext(ProvideAuth)
    const [isNavbarFixed, setNavbarFixed] = useState(false);
    const[finallUser,setFinal] = useState('')
    const [users] = fetchUsers()
    //profile log out handle 
    const logoutHandle = () => {
        logout()
    }
    //navbar fixed
    const handleRoute = ()=>{
        if(users){
            if(users.role==='admin'){
                setFinal('/admin')
            }
            if(users.role==='instructor'){
                setFinal('/instructor')
            }
            else{
                setFinal('/dashboard')
            }
            
        }
        // console.log(finallUser,users,users.role)
    }
    useEffect(() => {
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className={`${isNavbarFixed ? "fixed-navbar z-[1000]" : ''} text-black navbar h-[100px] w-full justify-between items-center px-[20px] flex`}>
                <div className="navbar-start">
                    {/* mobile responsive */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-gray-200 z-[20000]">
                            <li><ActiveLink to='/' >Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            <li><ActiveLink to='/courses'>Courses</ActiveLink></li> 
                            <li><ActiveLink to='/courses'>Cart<span>{}</span><AiOutlineShoppingCart /></ActiveLink></li> 
                            <li className='text-xl font-bold'><ActiveLink to="/ourinstructors">Instructors</ActiveLink></li>
                            {!user && <li><ActiveLink to='/login'>Login</ActiveLink></li>}
                        </ul>
                    </div>
                    {/* desktop navbar starts here */}
                    <a className="btn btn-ghost normal-case text-xl flex justify-center items-center gap-3"><img className='rounded-full w-[70px]' src="https://i.ibb.co/Fw5tdn7/Picsart-23-06-07-15-27-11-522-1.jpg" alt="logo not found!" title='lets GO on a Kitty Adventures' /><span className='font-thin text-black text-base'>P3RF3C7-5H07</span></a>
                </div>
                <div className=" font-semibold text-[16px] navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal flex justify-between items-center w-full md:w-[750px] lg:w-[650px]">
                        <li className='text-xl font-bold'><ActiveLink to='/'>Home</ActiveLink></li>
                        <li className='text-xl font-bold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        <li className='text-xl font-bold'><ActiveLink to="/courses">Courses</ActiveLink></li>
                        <li className='text-xl font-bold'><ActiveLink to="/ourinstructors">Instructors</ActiveLink></li>
                        <li className='text-xl font-bold'><ActiveLink to='/cart'>Cart<span>{}</span><AiOutlineShoppingCart /></ActiveLink></li> 
                        {!user && <li className='text-xl font-bold'><ActiveLink to='/login' >Login</ActiveLink></li>}
                    </ul>
                </div>
                {/* profile setting */}
                <div className="dropdown dropdown-end z-50">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                userLoading ? <Loading></Loading> : <img src={user ? `${user.photoURL ? user.photoURL : ''}` : "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="} title={user ? `${user.email ? user.email : user.displayName}` : ''} />}
                        </div>
                    </label>
                    <ul tabIndex={0} className={`${user ? '' : 'hidden'} menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-300`}>
                        <li>
                            <Link onClick={handleRoute} to={finallUser} 
                                className="justify-between">
                                Dashboard 
                            </Link>
                        </li>
                        <li>
                            <Link to='/cart' className="justify-between">
                                my selected courses
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logoutHandle}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;