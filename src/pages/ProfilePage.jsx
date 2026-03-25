import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const ProfilePage = () => {
  const { user, setUser } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("update button clicked");
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const profile = {
      displayName: name,
      photoURl: photo,
    };

    updateProfile(user, profile)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center p-6 gap-6 ">
      {/* user information */}
      <div className="flex flex-col items-center p-7 gap-4">
        <div>
          <img className="rounded-full" src={user.photoURL} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-red-800">
            User Name : {user.displayName}
          </h1>
          <h1 className="text-xl font-bold text-red-800">
            User Email : {user.email}
          </h1>
        </div>
      </div>
      {/* update profile */}
      <div className="flex flex-col ">
        <form onSubmit={handleUpdateProfile}>
          <div className="flex gap-3 py-4">
            <label className="font-semibold flex items-center">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Update Your Name"
            />
          </div>
          <div className="flex gap-3">
            <label className="font-semibold flex items-center">PhotoURL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Update Your Photo"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
