import React from "react";
import { Link } from "react-router";

const ResisterPage = () => {
const handleResister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({name,email,photo,password})
}
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
              {/* email */}
              <label className="label">Email</label>
              <input
              name="email" 
              type="email" className="input" placeholder="Email"
              required />
              {/* PhotoURL */}
              <label className="label">PhotoURL</label>
              <input 
              name="photo" type="text" className="input" placeholder="PhotoURL" 
              required />
              {/* password */}
              <label className="label">Password</label>
              <input 
              name="password" type="password" className="input" placeholder="Password" 
              required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">Resister</button>
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
