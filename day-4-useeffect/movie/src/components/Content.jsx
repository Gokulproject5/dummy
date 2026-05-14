import React, { useState } from "react";
import    CarouselCom     from './CarouselCom'
import Movie from "./Movie";

const Content = () => {
  let [search, setSearch] = useState("");
  let [limit,setLimit] = useState(50)
  // Handle search for search movie
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="space-y-5 bg-black ">
        {/* advitise */}
        <div className="flex ">
          <CarouselCom />
        </div>
        {/* search bar */}
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-100 flex w-150  rounded-xl px-2 py-1 items-center shadow-md shadow-black/90">
            <input
              className="w-full outline-0 placeholder:text-[13px] capitalize text-gray-800"
              type="search"
                     onChange={(e) => {
                handleSearch(e);
              }}
              name=""
              id=""
              placeholder="Search your favourite movie..."
              
            />
            <button 
     
            className="bg-purple-500 py-1 px-2 rounded-xl italic font-bold text-white hover:bg-purple-500 transition-all hover:scale-110 hover:shadow shadow-black">
              Search
            </button>
          </div>
          <div>
            {/* Display movie count */}
             <select className=" rounded-lg  py-2 px-2 bg-white " onChange={ (e)=>setLimit(e.target.value) } name="" id="">
              <option value="49">Movies</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">49</option>

             </select>
          </div>
        </div>
        {/* movie list */}
        <div>
          <Movie value={search} Limit = {limit}  />
        </div>
      </div>
    </>
  );
};

export default Content;
