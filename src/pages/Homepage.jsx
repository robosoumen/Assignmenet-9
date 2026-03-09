import React from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import { useLoaderData } from "react-router";

const Homepage = () => {
    const data = useLoaderData();
    // console.log(data)
  return (
    <div className="space-y-2">
      <section className="slider mt-8">
        <Slider></Slider>
      </section>
      <section className=" flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-5">
            {
                data.map(news => <PopularToys key={news.toyId} news={news}></PopularToys>)
            }
        </div>
      </section>
    </div>
  );
};

export default Homepage;
