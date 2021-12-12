import React from 'react'
import { Routes, Route } from "react-router-dom";
import HeadlessUI from "../headlessUI/Main";
import SkeletonLoader from "../skeletonLoader/Main";

const Main = () => {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<SkeletonLoader />} />
          <Route path="/headlessui" element={<HeadlessUI />} />
        </Routes>
      </>
    );
}

export default Main
