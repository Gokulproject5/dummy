import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-200 mx-auto max-w-6xl h-screen">
        <div className="max-w-3xl mx-auto space-y-3">
          <h1 className="text-6xl font-bold text-purple-500">
            Gokulakrishnan A
          </h1>
          <p className="text-2xl px-10 text-gray-600">Full Stack Developer</p>
          <div className="flex space-x-5 px-10">
            <button className="bg-purple-400 text-white rounded px-2 py-2 hover:bg-purple-600 font-medium">
              Explore
            </button>
            <button className="bg-purple-400 text-white rounded px-2 py-2 hover:bg-purple-600 font-medium">
              Contact Me
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="w-80 h-80 rounded-full border-4 border-purple-500 relative">
            <div className="bg-white rounded-full w-3 h-1 absolute top-27 right-38.5">
              {" "}
            </div>
            <div className="bg-red-500 rounded-full w-1 h-1 absolute top-27 right-39.5 z-20">
              {" "}
            </div>
            <img
              src="/src/assets/image.png"
              alt=""
              className="rounded-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
