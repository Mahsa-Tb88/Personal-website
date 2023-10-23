import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="flex flex-col justify-center items-center  h-screen">
      <div className="  flex mb-48 flex-col justify-center items-center ">
        <div className="flex justify-center items-center mb-20">
          <HiOutlinePhone className="text-pink-700 text-5xl mr-3" />
          <span className="text-pink-50 text-5xl">(+1) 672-975-3876</span>
        </div>
        <div className="flex justify-center items-center mb-20">
          <HiOutlineMail className="text-pink-700 text-5xl mr-3" />
          <span className="text-pink-50 text-5xl">Mah.tabesh88@gmail.com</span>
        </div>
        <div className="flex justify-center items-center mb-20">
          <HiOutlineLocationMarker className="text-pink-700 text-5xl mr-3" />
          <span className="text-pink-50 text-5xl">Canada, B.C, Chilliwack</span>
        </div>
        <div>
          <ul className="flex flex-row justify-start align-middle mt-12 ">
            <li className="border p-1 md:p-3 mx-3 cursor-pointer border-pink-700 rounded-full transition ease-in-out duration-500 hover:bg-pink-700 hover:border-pink-700">
              <Link to="https://www.linkedin.com/in/mahsa-tabesh-8bb08683/">
                <FaLinkedinIn className="text-pink-100 text-xl md:text-4xl" />
              </Link>
            </li>
            <li className="border p-1 md:p-3 mx-3 cursor-pointer border-pink-700 rounded-full transition ease-in-out duration-500 hover:bg-pink-700 hover:border-pink-700">
              <Link to="https://github.com/Mahsa-Tb88">
                <FaGithub className="text-pink-100 text-xl md:text-4xl " />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
