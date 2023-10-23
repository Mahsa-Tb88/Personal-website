import React from "react";
import IMAGES from "../Images/ImageMahsa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" w-11/12 md:w-4/5 h-screen mx-auto flex flex-col-reverse md:flex-row justify-between items-center  ">
      <div className="md:w-3/5 flex flex-col justify-center items-center md:items-start">
        <p className="text-pink-50 flex flex-col justify-center items-center md:items-start ">
          <p className="text-xl md:text-3xl">Hi, It's me</p> <br />
          <div>
            <h1 className="text-pink-50 text-4xl md:text-8xl mb-5 md:mb-10 ">
              Mahsa Tabesh
            </h1>
          </div>
          <p className="text-3xl md:text-6xl text-pink-200">
            Frontend Web Developer
          </p>
          <br />
          <p className="text-xl md:text-3xl">Who is,</p>
          <p className="text-2xl md:text-4xl">always learning and growing.</p>
        </p>
        <div>
          <ul className="flex flex-row justify-start align-middle mt-12 ">
            <li className="border p-1 md:p-3 mx-3 cursor-pointer border-pink-200 rounded-full transition ease-in-out duration-500 hover:bg-pink-700 hover:border-pink-700">
              <Link to="https://www.linkedin.com/in/mahsa-tabesh-8bb08683/">
                <FaLinkedinIn className="text-pink-100 text-xl md:text-4xl" />
              </Link>
            </li>
            <li className="border p-1 md:p-3 mx-3 cursor-pointer border-pink-200 rounded-full transition ease-in-out duration-500 hover:bg-pink-700 hover:border-pink-700">
              <Link to="https://github.com/Mahsa-Tb88">
                <FaGithub className="text-pink-100 text-xl md:text-4xl " />
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn hover:bg-pink-100 px-10 md:px-24 py-2 md:py-5 mt-11 rounded-md text-xl md:text-3xl hover:text-pink-700 bg-pink-700 text-pink-100 transition ease-in-out duration-700 ">
          Download CV
        </button>
      </div>
      <div className="w-1/4 mx-auto md:w-2/5 rounded-lg  md:inline">
        <img
          src={IMAGES.image1}
          alt="first image"
          className=" rounded-lg shadow-lg shadow-pink-200/30 "
        />
      </div>
    </div>
  );
}

export default Home;
