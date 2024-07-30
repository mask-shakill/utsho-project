import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0A2449] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
            Project 1
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Project 2
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Project 3
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
