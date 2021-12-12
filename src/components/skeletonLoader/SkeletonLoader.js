import React from "react";
import One from "./design/One";
import Three from "./design/Three";
import Two from "./design/Two";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const SkeletonLoader = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-10">
        <h1 className="text-center mt-5">
          <strong className="text-fuchsia-600">Skeleton Loader</strong>
        </h1>
        <One />
        <Two />
        <Three />
      </div>
      <Footer />
    </>
  );
};

export default SkeletonLoader;
