import React, { useContext } from "react";
import { api } from "../App";

const Skill = () => {
  let [info] = useContext(api);

  return (
    <>
      <div className="max-w-6xl flex flex-col  mx-auto bg-black py-5 h-[100]">
        <div>
          <h1 className="text-4xl text-purple-500 font-semibold px-10">
            Skills
          </h1>
          <div className="items-center flex">
            <ul className="flex flex-col space-y-5 max-w-6xl mx-auto item-center my-20">
              {info.map((item) => {
                return (
                  <li
                    className={`${item.color} w-${item.ratio} rounded-sm px-2 py-1 text-white flex justify-between`}
                    key={item.id}
                  >
                    {item.skill}{" "}
                    <span className="bg-gray-200 px-2 py-1 rounded text-black">
                      {" "}
                      {item.ratio}%{" "}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
