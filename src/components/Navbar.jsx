import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user Trying to logOut");
    logOut()
      .then(() => {
        alert("you logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center  mx-auto py-3 bg-green-600 text-white px-6">
      <div>
        <p>ToyGALAXY</p>
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="profile">My Profile</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <div>{user && user.email}</div>
        <img className="w-9 rounded-full" src={userImg} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            Log Out
          </button>
        ) : (
          <Link className="btn btn-primary" to="/auth/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
