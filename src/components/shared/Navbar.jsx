"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession()
  console.log(session)
    
    return (
        <div>
            <div className="navbar bg-base-100 text-slate-900">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {/* <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
       
      </ul> */}
    </div>
    
    <Link href='/'>
    <Image alt="logo" src='/assets/logo.svg' height={60} width={100}></Image>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className='flex items-center space-x-6'>
    {
        navItems.map((nav=>(
            <Link className='font-semibold hover:text-primary duration-300' href={nav.path} key={nav.path}>{nav.title}</Link>
        )))
    }
  </div>
  </div>
  <div className="navbar-end gap-4">
  <IoBagOutline className='text-2xl'/>
  <CiSearch className='text-2xl'/>
    <button className="btn btn-outline btn-primary ">Appointment</button>
   
   {
    !session.data ? <Link href='/login'> <button className="btn  btn-primary text-white">Login</button></Link>:
  
   <div className='flex items-center gap-2'>
     <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={60} width={60} className='rounded-full'></Image>

<button className="btn  btn-info text-white" onClick={()=>signOut()}>LogOut</button>
   </div>
   }
  </div>
</div>
        </div>
    );
};
const navItems =[
  {
      title:"Home",
      path:'/'
  },
  {
      title:"About",
      path:'/about'
  },
  {
      title:"Services",
      path:'/services'
  },

  {
      title:"Contact",
      path:'/contact'
  },
  {
    title:"My Bookings",
    path:'/my-bookings'
},
]

export default Navbar;