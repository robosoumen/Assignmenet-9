import React from "react";
import { Link } from "react-router";

const PopularToys = ({ news }) => {
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
    toyId,
  } = news;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            className="w-full h-48 object-cover"
            src={pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <h1>Rating : {rating}</h1>
          <p>AvailableQuantity : {availableQuantity}</p>
          <p>Price : {price}</p>
          <Link to={`/toy-details/${toyId}`} className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
