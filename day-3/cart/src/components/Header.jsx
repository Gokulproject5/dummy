import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex item-center justify-between bg-slate-800 text-white py-8 px-10">
        <div className="flex  bg-amber-500 w-100 px-2 py-2 items-center justify-between rounded-md shadow shadow-slate-600">
          <h1 className="text-2xl italic font-bold ">Shopify</h1>
          <div className="w-8 h-8 rounded-full text-blue-500 font-bold text-center py-1 bg-gray-100 ">
            <span>G</span>
          </div>
        </div>
        <div className="flex items-center space-x-10 text-2xl ">
          <FaCartArrowDown role="button" tabIndex={0} />
          <a href="https://github.com/Gokulproject5">
            {" "}
            <FaGithub />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
