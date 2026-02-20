import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  mx-auto py-3 bg-amber-600 text-white px-6'>
           <div>
                 <p>ToyGALAXY</p>
            </div>
           <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='profile'>My Profile</NavLink>
           </div>
           <div className='flex gap-2 items-center'>
                <img className='w-9 rounded-full' src={user} alt="" />
                <button className='btn btn-primary'>Resister Now</button>
           </div>
        </div>
    );
};

export default Navbar;