import React from "react";
import mainImage from "../assists/images/mainGrocry-removebg-preview.png";
const Home = () => {
  return (
    <div className=" flex justify-evenly align-middle bg-black h-[100vh] w-[100vw]">
      <div className="flex justify-center align-middle flex-col">
        <h1 className="font-bold text-4xl text-white">Groceries</h1>
        <h1 className="font-bold text-4xl text-white mt-4">
          delivery in <span className="font-normal">15 mints</span>
        </h1>
        <p className="w-[20rem] text-xs text-white mt-2">
          A grocery store is a retail store that primarily sells a general line
          of food, such as fruits, vegetables, meat, poultry, canned and frozen
          foods. Synonyms for grocery stores include supermarkets and food
          stores.
        </p>
        <button className="p-2 bg-yellow-400 text-white w-[10rem] rounded-2xl hover:bg-white hover:text-black mt-6">
          Order now
        </button>
      </div>
      <div className="mt-40">
        <img src={mainImage} className="h-[300px] w-[500px]" />
      </div>
    </div>
  );
};

export default Home;
