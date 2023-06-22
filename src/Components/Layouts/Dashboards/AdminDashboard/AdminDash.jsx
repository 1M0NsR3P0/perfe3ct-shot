import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserCheck from '../../CustomHook/UserCheck';

const AdminDash = () => {
  const [isAdmin, loadingAdmin] = UserCheck()

  return (
    <>
  
    {!isAdmin?<p className='text-error' >Hey Your are not supposed to be here</p>:<div style={{    
    backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1028%26quot%3b)' fill='none'%3e%3cpath d='M99.852%2c642.334C140.28%2c643.79%2c181.207%2c627.26%2c201.378%2c592.194C221.502%2c557.209%2c214.338%2c514.075%2c193.519%2c479.499C173.415%2c446.11%2c138.804%2c422.277%2c99.852%2c423.58C62.777%2c424.821%2c34.426%2c452.976%2c16.448%2c485.425C-0.88%2c516.701%2c-6.537%2c553.741%2c10.245%2c585.313C28.055%2c618.82%2c61.931%2c640.969%2c99.852%2c642.334' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1347.761%2c374.951C1378.659%2c377.149%2c1414.287%2c376.212%2c1430.796%2c350.002C1447.981%2c322.718%2c1436.357%2c288.141%2c1419.91%2c260.406C1403.869%2c233.356%2c1379.202%2c210.687%2c1347.761%2c209.978C1315.223%2c209.245%2c1284.315%2c227.918%2c1269.749%2c257.022C1256.396%2c283.702%2c1266.485%2c314.599%2c1282.946%2c339.482C1297.509%2c361.497%2c1321.432%2c373.078%2c1347.761%2c374.951' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M367.988178645699 466.84129408990816L345.85108563401246 414.68957114586607 278.6920477237926 473.9710721354169z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M714.3139168286061 249.11748050700373L753.35206778012 157.14936023049498 622.3457965520973 210.0793295554899z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M316.97701271719217 382.6141963209871L413.29327579575454 478.9304593995495 509.6095388743169 382.61419632098705 413.29327579575454 286.29793324242473z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1028'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`}} 
    
    className="bg-slate-100 drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center"style={{overflow:"scroll"}}>
    {
      <Outlet></Outlet>
    }
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side " >
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content ">
      {/* Sidebar content here */}
      <li><Link to="/admin/dashboard"> Dashboard</Link></li>
      <li><Link to="/admin/users">Manage Users</Link></li>
      <li><Link to="/admin/classes">Manage Classes</Link></li>
      <li><Link to="/admin/settings"> Settings</Link></li>
      <li><Link to="/">Home Page</Link></li>
    </ul>
  
  </div>
</div>}
    </>
  );
};

export default AdminDash;