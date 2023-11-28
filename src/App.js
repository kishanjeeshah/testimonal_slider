import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";


const App = () => {
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col justify-center algn-items-center bg-gray-200">
      <div className="text-center ">
       
      <h1 className=" text-4xl font-bold"> Our Testimonials </h1>

    <div className="flex justify-center ">
    <div className="bg-violet-400 h-[4px] w-[130px]"></div>
    </div>
      
    <div className="flex justify-center">
    <Testimonial reviews={reviews} />
    </div>

      </div>
    </div>
  );
};

export default App;
