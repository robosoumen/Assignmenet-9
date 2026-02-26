import React from "react";

const PopularToys = ({news}) => {
    const {toyName,sellerName,sellerEmail,price,rating,availableQuantity,description,pictureURL,subCategory} = news;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <h1>Rating : {rating}</h1>
          <p>AvailableQuantity : {availableQuantity}</p>
          <p>Price : {price}</p>
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
