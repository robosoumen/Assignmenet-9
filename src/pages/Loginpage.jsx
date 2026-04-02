import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();

  const { signIn, googleSignIn, setUser } = use(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast("Google login successful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast(error);
        setError(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("login successful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast(errorCode);
      });
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Please Check Your Email");
      })
      .catch((error) => {
        toast(error);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="font-semibold my-2.5"> Please Login Your Account</h1>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              required
              type="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                required
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
              />
              <button
                onClick={handleShowPassword}
                className=" absolute top-8 right-4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div>
              <a onClick={handleForgetPassword} className="link link-hover">
                Forgot password?
              </a>
            </div>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            {/* google */}
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
              Don't have Account?{" "}
              <Link className="text-secondary" to="/auth/resister">
                Please Resister
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
