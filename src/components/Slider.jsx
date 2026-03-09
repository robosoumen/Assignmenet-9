import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-100">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C-8wDmJJVMhy30AfWaDBuxCBXoZ9ZXtbYw&s"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://m.media-amazon.com/images/I/61iPFOQMs4L._AC_UF350,350_QL80_.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://m.media-amazon.com/images/I/71R8+EsM3lL._AC_UF1000,1000_QL80_.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA34d-FJT3ojdyXRQS66xCUr-DRGqDFygmOw&s"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
     
    </div>
  );
};

export default Slider;
