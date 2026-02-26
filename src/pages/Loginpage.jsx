import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="font-semibold my-2.5"> Please Login Your Account</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p>
              Don't have Account?{" "}
              <Link className="text-secondary" to="/auth/resister">
                Please Please Resister
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
