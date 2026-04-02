import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const ResisterPage = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordReg, setPasswordReg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("name should be more than 5 character");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // regEx
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if(!passwordValidation.test(password)){
      setPasswordReg('Password must ha at least 6 characters\n- Must have 1 uppercase letter\n- Must have 1 lowercase letter');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
         navigate("/");
         toast('register is successful')
        // updateUser({ displayName: name, photoURL: photo })
        //   .then(() => {
        //     setUser({ ...user, displayName: name, photoURL: photo });
        //     navigate("/");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     setUser(user);
        //   });

      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold my-2.5 text-center mt-6">
          Please Resister Your Account
        </h1>
        <form onSubmit={handleResister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="Name"
              className="input"
              placeholder="Type Your Name"
              required
            />
            {nameError && (
              <p className="text-xs italic text-red-600">{nameError}</p>
            )}
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* PhotoURL */}
            <label className="label">PhotoURL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="PhotoURL"
            />
            {/* password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              {
                passwordReg && <p className="text-xs italic text-red-600">{passwordReg}</p>
              }
              <button
                onClick={handleShowPassword}
                className=" absolute top-8 right-4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Resister
            </button>
            {/* Google */}
            <button
              onClick={handleGoogleLogIn}
              className="btn bg-blue-500 text-white border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#ffffff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p>
              Already Have a Account?
              <Link className="text-secondary" to="/auth/login">
                Please Login.
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ResisterPage;

// --------------------------------------------------------------------------

// import React, { use } from 'react';
// import {AuthContext} from '../provider/AuthContext'

// const ResisterPage = () => {
//     const {authInfo} = use(AuthContext);
//     console.log('resister page ', authInfo)
//     return (
//         <div>
//             <h1>This is resister page</h1>
//         </div>
//     );
// };

// export default ResisterPage;
