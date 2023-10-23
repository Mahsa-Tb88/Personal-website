import React from "react";
import IMAGES from "../Images/ImageMahsa";
import { Link } from "react-router-dom";

function Certificates() {
  return (
    <div className="w-4/5  mx-auto mt-32 pb-72  ">
      <div className="grid grid-cols-3 gap-x-6 gap-y-16 ">
        <Link
          className="pointer"
          to="https://coursera.org/share/cd6ac374c8ffaf53eebfdfb76b766e52"
        >
          <img src={IMAGES.image11} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Developing Front-End Apps with React
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/14b79795fe75e072188f2274905c61a8"
        >
          <img src={IMAGES.image10} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            React Basic
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/cc611b0c85f7b9cb157d476094829353"
        >
          <img src={IMAGES.image4} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Interactivity with JavaScript
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/830b214110c0a123a2484e052f91951f"
        >
          <img src={IMAGES.image5} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            JavaScript Basics
          </h2>
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            University Of Michigan
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/aaafc76952e2ee676ecfaf09ad6b1f44"
        >
          <img src={IMAGES.image6} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Advanced Styling with Responsive Design
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/72377448e9416ad23b811d3ea75efffe"
        >
          <img src={IMAGES.image7} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Web Design for Everybody Capstone
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/b4fff0f2ffe959bf4443d0c267436004"
        >
          <img src={IMAGES.image8} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            certificate-web design and coding
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/ec19c1f28bc4bc89c423ccab876f34fd"
        >
          <img src={IMAGES.image3} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Introduction to CSS3
          </h2>
        </Link>
        <Link
          className="pointer"
          to="https://coursera.org/share/ec19c1f28bc4bc89c423ccab876f34fd"
        >
          <img
            src={IMAGES.image2}
            className="h-auto max-w-full rounded-lg mb-2"
          />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Introduction to HTML5
          </h2>
        </Link>
        
        <Link
          className="pointer"
          to="https://coursera.org/share/8db8373c54009b1e9b0fbead8b432f04"
        >
          <img src={IMAGES.image9} className="h-auto max-w-full rounded-lg " />
          <h2 className="text-pink-50 text-3xl text-center mt-4">
            Programming for Everybody (Getting Started with python)
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Certificates;
