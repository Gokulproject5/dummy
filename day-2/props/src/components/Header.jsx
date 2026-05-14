import React from "react";

const Header = (prop) => {
  const user = prop.user;
  const firstLetter = user.slice(0, 1);

  return (
    <>
      <div className="bg-black py-4 px-10 flex justify-between items-center max-w-6xl mx-auto ">
        <div>
          <h1 className="text-purple-500 font-bold text-xl">Gokul</h1>
        </div>
        <div className="flex justify-around space-x-10 items-center text-white text-sm font-medium font-sans">
          <span className="hover:text-purple-500 hover:underline cursor-pointer">
            Home
          </span>
          <span className="hover:text-purple-500 hover:underline cursor-pointer">
            Skill
          </span>
          <span className="hover:text-purple-500 hover:underline cursor-pointer">
            Blog
          </span>
          <span className="hover:text-purple-500 hover:underline cursor-pointer">
            Contact
          </span>
          <span className="w-8 h-8 bg-white text-purple-500 text-bold rounded-full text-center py-1">
            {firstLetter}
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
