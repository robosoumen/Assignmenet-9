import React from "react";

const SingleToyDetails = ({ news }) => {
  console.log(news);
  return (
    <div className="flex justify-center ">
      <div className="card bg-amber-500 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title text-4xl flex justify-center bg-amber-200 rounded-3xl">
            {news.toyName}
          </h2>
        </div>
        <figure>
          <img src={news.pictureURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className=" flex justify-between text-base">
            <h1 className="bg-red-600 rounded-field p-1 gap text-white">Price : {news.price}</h1>
            <h1 className="bg-red-600 rounded-field p-1 gap text-white">Ratings : {news.rating}</h1>
            <h1 className="bg-red-600 rounded-field p-1 gap text-white">Quantity : {news.availableQuantity}</h1>
          </div>
         <div className="bg-red-600 rounded-2xl p-3">
           <div className="flex justify-between">
            <p className="text-white my-2"><span className="text-base text-red-500 bg-white p-1 rounded-xl">Description :</span> {news.description}</p>
          </div>
          <div className="flex justify-between gap-2">
            <h1 className="bg-yellow-200 p-3 rounded-2xl">category : {news.subCategory}</h1>
            <h1 className="bg-yellow-200 p-3 rounded-2xl">Seller Email : {news.sellerEmail}</h1>
          </div>
         </div>
        </div>
      </div>

      {/* <h1 className='text-2xl'>{news.toyName}</h1>
           <img className='w-full h-[350px] object-cover' src={news.pictureURL} alt="" />
           <h1>{news.sellerName}</h1>
           <h1>{news.sellerEmail}</h1>
           <h1>{news.price}</h1>
           <h1>{news.rating}</h1>
           <h1>{news.availableQuantity}</h1>
            <h1>{news.description}</h1>
            <h1>{news.subCategory}</h1> */}
    </div>
  );
};

export default SingleToyDetails;
