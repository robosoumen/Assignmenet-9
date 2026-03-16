import React from 'react';

const FormSection = () => {
    return (
        <div className='flex p-5 space-y-4 items-center flex-col bg-amber-200'>
            <div>
                <p className='font-bold underline'>Submit Your Details</p>
            </div>
            <div className='pl-3 bg-white p-1'>
                <label><span className=''>Name : </span></label>
            <input placeholder='Your Name' type="name" className=''/>
            </div>
            <div className='pl-3 bg-white p-1'>
                <label>Email : </label>
            <input placeholder='Your Email' type="email" />
            </div>
            <div>
                <button className='btn bg-red-600 border-0'>Try Now</button>
            </div>
        </div>
    );
};

export default FormSection;