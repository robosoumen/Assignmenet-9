// import React from "react";
// import Slider from "../components/Slider";
// import PopularToys from "../components/PopularToys";
// import { useLoaderData } from "react-router";
// import FormSection from "../components/FormSection";
// import ExtraSection from "../components/ExtraSection";

// const Homepage = () => {
//     const data = useLoaderData();
//     // console.log(data)
//   return (
//     <div className="space-y-2">
//       <section className="slider mt-8">
//         <Slider></Slider>
//       </section>
//       <div>
//         <ExtraSection></ExtraSection>
//       </div>
//       <h1 className="text-center text-3xl font-bold p-4">Popular Toys</h1>
//       <section className=" flex justify-center">
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-5 ">
//             {
//                 data.map(news => <PopularToys key={news.toyId} news={news}></PopularToys>)
//             }
//         </div>
//       </section>
//       <div>
//         <FormSection></FormSection>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React, { useState } from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import { useLoaderData } from "react-router";
import FormSection from "../components/FormSection";
import ExtraSection from "../components/ExtraSection";

const Homepage = () => {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const displayedToys = showAll ? data : data.slice(0, 6);
  return (
    <div className="space-y-2">
      <section className="slider mt-8">
        <Slider />
      </section>
      <div>
        <ExtraSection />
      </div>
      <h1 className="text-center text-3xl font-bold p-4">Popular Toys</h1>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedToys.map((news) => (
            <PopularToys key={news.toyId} news={news} />
          ))}
        </div>
      </section>
      {data.length > 6 && (
        <div className="flex justify-center my-8">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Show All Toys
            </button>
          )}
        </div>
      )}
      <div>
        <FormSection />
      </div>
    </div>
  );
};

export default Homepage;
