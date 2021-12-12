import React from "react";
import One from "./design/One";
import Three from "./design/Three";
import Two from "./design/Two";

const Main = () => {
  return (
    <>
      <div class="min-h-screen flex-1 flex p-10">
        <One />
        <Two />
        <Three />
      </div>
    </>
  );
};

export default Main;
