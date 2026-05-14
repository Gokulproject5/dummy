import React from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { createContext } from "react";

export const searchApi = createContext();
const Content = () => {
  let [searchValue, setSearchvalue] = useState("");

  let searchVal = "";
  // Handle input for search
  const search = (e) => {
    searchVal = e.target.value;
  };

  // handle button
  const searchBtn = () => {
    setSearchvalue(searchVal);
  };

  return (
    <>
      <div className="flex flex-col  space-y-5 h-screen py-10 bg-gray-700">
        <div className="bg-gray-400 mx-auto rounded-md w-150 py-2 px-2 space-x-3  shadow-2xl shadow-black flex items-center justify-between ">
          <input
            type="text "
            placeholder="Search your favorite product"
            className="bg-white outline-0 placeholder:text-sm py-1 placeholder:px-2 rounded-md w-full"
            onChange={(e) => {
              search(e);
            }}
          />
          <button
            role="button"
            onClick={searchBtn}
            className="bg-blue-500 shadow shadow-gray-400  rounded-xl px-2 py-2 text-md  text-white font-bold"
          >
            <FaSearch />{" "}
          </button>
        </div>
        <div className="flex space-x-3 mx-auto w-[325] mt-10 bg-gray-400 rounded-md px-5 py-4">
          <searchApi.Provider value={{ searchValue, setSearchvalue }}>
            <Card />
          </searchApi.Provider>
        </div>
      </div>
    </>
  );
};

export default Content;
