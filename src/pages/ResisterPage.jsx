import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

// const googleProvider = new GoogleAuthProvider();
const ResisterPage = () => {

  // const [userData, setUserData] = useState(null);
  // const handleGoogleLogIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       console.log(result.user);
  //       setUser(result.user)
  //       navigate('/')
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const { createUser, setUser, updateUser, googleSignIn} = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      setUser(result.user);
       navigate("/");
    }).catch(error => {
      console.log(error)
    })
  }

  const handleResister = (e) => {
    e.preventDefault();
    // console.log(e.target);
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
    // console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
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
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Resister
            </button>
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-primary mt-4"
            >
              Google LogIn
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
