import React from "react";
import grocery from "../../assists/images/grocery-removebg-preview.png";
import packet from "../../assists/images/packet-removebg-preview.png";

const Navbar = () => {
  return (
    <div className=" mt-0 p-0 flex justify-between align-middle mt-6 bg-black fixed top-0 w-[100%] ">
      <img src={grocery} className="h-16 w-16 ml-4 cursor-pointer" />
      <ul className="flex justify-evenly align-bottom [&>*]:mr-6 text-slate-400 mt-4 [&>*]:cursor-pointer ">
        <li className="transition-color hover:text-slate-50">Home</li>
        <li className="transition-color hover:text-slate-50">About</li>
        <li className="transition-color hover:text-slate-50">Contect</li>
      </ul>
      <img src={packet} className="h-16 w-16 mr-4 cursor-pointer" />
    </div>
  );
};

export default Navbar;
