import React from "react";
import { Routes, Route } from "react-router-dom";
import HeadlessUI from "./components/headlessUI/HeadlessUI";
import SkeletonLoader from "./components/skeletonLoader/SkeletonLoader";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SkeletonLoader />} />
        <Route path="/headlessui" element={<HeadlessUI />} />
      </Routes>
    </>
  );
}

export default App;
