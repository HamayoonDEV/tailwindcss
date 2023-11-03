import React from "react";

const Navbar = () => {
  return (
    <div className=" mt-0 p-0 flex justify-evenly align-middle mt-6 bg-black fixed top-0 w-[100%] ">
      <img
        src="https://i.pinimg.com/originals/3d/5c/e8/3d5ce8662dac6c2e92a2ffd9f4b96d36.png"
        className="h-16 w-16"
      />
      <ul className="flex justify-evenly align-bottom [&>*]:mr-6 text-slate-600 mt-4 [&>*]:cursor-pointer ">
        <li className="transition-color hover:text-slate-50">Home</li>
        <li className="transition-color hover:text-slate-50">About</li>
        <li className="transition-color hover:text-slate-50">Contect</li>
      </ul>
      <img
        src="https://img.freepik.com/free-psd/bag-front-side_187299-9868.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698796800&semt=ais"
        className="h-16 w-16"
      />
    </div>
  );
};

export default Navbar;
