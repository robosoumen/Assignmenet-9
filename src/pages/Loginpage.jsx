import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {
  const {signIn} = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
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
            <input name="email" required type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input name="password" required type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p>
              Don't have Account?{" "}
              <Link className="text-secondary" to="/auth/resister">
                Please Please Resister
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
