import React from "react";

const Footer = (user) => {
  return (
    <>
      <div className="bg-black/90 text-white text-lg text-center p-10">
        <div>
          <h1>All Right Reserved by {user.user}</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
