import React from "react";
import { Routes, Route } from "react-router-dom";
import HeadlessUI from "../headlessUI/HeadlessUI";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";
import DialogBox from "../headlessUI/design/DialogBox";
import DisclosureBox from "../headlessUI/design/DisclosureBox";
import ListBox from "../headlessUI/design/ListBox";
import MenuBox from "../headlessUI/design/MenuBox";
import PopoverBox from "../headlessUI/design/PopoverBox";
import RadioGroupBox from "../headlessUI/design/RadioGroupBox";
import SwitchBox from "../headlessUI/design/SwitchBox";
import TabsBox from "../headlessUI/design/TabsBox";
import TransitionBox from "../headlessUI/design/TransitionBox";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SkeletonLoader />} />
        <Route path="/headlessui" element={<HeadlessUI />} />
        <Route path="/headlessui/dialog" element={<DialogBox />} />
        <Route path="/headlessui/disclosure" element={<DisclosureBox />} />
        <Route path="/headlessui/listbox" element={<ListBox />} />
        <Route path="/headlessui/menu" element={<MenuBox />} />
        <Route path="/headlessui/popover" element={<PopoverBox />} />
        <Route path="/headlessui/radiogroup" element={<RadioGroupBox />} />
        <Route path="/headlessui/switch" element={<SwitchBox />} />
        <Route path="/headlessui/tabs" element={<TabsBox />} />
        <Route path="/headlessui/transition" element={<TransitionBox />} />
      </Routes>
    </>
  );
};

export default Router;
