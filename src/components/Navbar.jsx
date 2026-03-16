import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log("user Trying to logOut");
    logOut()
      .then(() => {
        alert("you logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`bg-[#A31F34] flex justify-between items-center  mx-auto py-3 text-white px-6 tracking-wide font-normal`}
    >
      <div>
        <NavLink className={"hover:text-yellow-300"} to="/">
          ToyGALAXY
        </NavLink>
      </div>
      <div className="flex gap-8">
        <NavLink to="/" className={"hover:text-yellow-300"}>
          Home
        </NavLink>
        <NavLink className={"hover:text-yellow-300"} to="profile">
          My Profile
        </NavLink>
      </div>
      {/* project requirement */}
      <div className="flex gap-2 items-center">
        {/* <div>{user && user.email}</div> */}
        <div className="relative group flex items-center">
          <img
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer object-cover"
            src={`${user ? user.photoURL : userImg}`}
            alt=""
          />
          <span className="absolute  right-9  text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
            {user ? user.displayName : ""}
          </span>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-blue-900 hover:bg-blue-950 text-white border-0"
          >
            Log Out
          </button>
        ) : (
          <Link
            className="btn bg-blue-900 hover:bg-blue-950 text-white border-0"
            to="/auth/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

