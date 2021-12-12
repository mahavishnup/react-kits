import React from "react";
import { Routes, Route } from "react-router-dom";
import HeadlessUI from "../headlessUI/HeadlessUI";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SkeletonLoader />} />
        <Route path="/headlessui" element={<HeadlessUI />} />
      </Routes>
    </>
  );
};

export default Router;
