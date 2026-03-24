import React from "react";

const FormSection = () => {
  const handleForm = () => {
    alert("form submitted");
  };
  return (
    <div className="flex p-5 space-y-4 items-center flex-col bg-amber-200">
      <div>
        <p className="font-bold underline">Submit Your Details</p>
      </div>
      <form>
        <div className="pl-3 bg-white p-1">
          <label>
            <span className="">Name : </span>
          </label>
          <input placeholder="Your Name" type="name" className="" />
        </div>
        <div className="pl-3 bg-white p-1">
          <label>Email : </label>
          <input placeholder="Your Email" type="email" />
        </div>
        <div className="flex justify-center p-6">
              <button onClick={handleForm} className="btn bg-red-600 border-0 text-white">
          Try Now
        </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
