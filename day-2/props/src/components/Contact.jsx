import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-100 flex flex-col bg-gray-200 ">
        <div className="my-10">
          <h1 className="text-2xl font-bold px-5">Contact Us </h1>
        </div>
        <div>
          <div className="flex-col py-10 flex max-w-xl  border-b-0 px-10">
            <label htmlFor="">Full Name</label>
            <input type="text" name="" id="" className="border-b-4" />
            <label htmlFor="">E-mail</label>
            <input type="text" name="" id="" className="border-b-4" />
            <label htmlFor="">Message</label>
            <input type="text" name="" id="" className="border-b-4" />

            <div className="my-5">
              <button className="bg-purple-500 px-3 py-2 rounded-2xl text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
