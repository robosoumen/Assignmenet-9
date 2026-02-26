import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
     const {user} = use(AuthContext);
    return (
        <div className='flex justify-between items-center  mx-auto py-3 bg-green-600 text-white px-6'>
           <div>
                 <p>ToyGALAXY</p>
            </div>
           <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='profile'>My Profile</NavLink>
           </div>
           <div className='flex gap-2 items-center'>
                <img className='w-9 rounded-full' src={userImg} alt="" />
                <Link className='btn btn-primary' to='/auth/resister'>Login</Link>
           </div>
        </div>
    );
};

export default Navbar;