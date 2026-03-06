import React from 'react';

const SingleToyDetails = ({news}) => {
    console.log(news)
    return (
        <div>
           <h1 className='text-2xl'>{news.toyName}</h1>
           <img className='w-full h-[350px] object-cover' src={news.pictureURL} alt="" />
           <h1>{news.sellerName}</h1>
           <h1>{news.sellerEmail}</h1>
           <h1>{news.price}</h1>
           <h1>{news.rating}</h1>
           <h1>{news.availableQuantity}</h1>
            <h1>{news.description}</h1>
            <h1>{news.subCategory}</h1>
        </div>
    );
};

export default SingleToyDetails;