import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="h-44 md:h-24"></div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-mont text-center">
            <p className="text-gray-50 pb-5">Designed and Developed By</p>

            <div className="h-1 border-2 border-white border-dotted"></div>

            <div className="flex text-white w-full justify-between py-3">
              <FaFacebook />
              <FaMailBulk />
              <FaInstagram />
              <FaLinkedin />
              <FaGithub />
            </div>

            <div className="h-1 border-2 border-gray-50 border-dotted"></div>

            <p className="text-gray-50 my-2">Pratap Singh Chouhan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
