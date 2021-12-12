import React from "react";
import { Link } from "react-router-dom";
import "./headlessUI.css";

const HeadlessUI = () => {
  return (
    <>
      <nav className="nav flex-1 flex justify-items-center">
        <Link className="link" to="/headlessui/dialog">
          Dialog
        </Link>
        <Link className="link" to="/headlessui/disclosure">
          Disclosure
        </Link>
        <Link className="link" to="/headlessui/listbox">
          Listbox
        </Link>
        <Link className="link" to="/headlessui/menu">
          Menu
        </Link>
        <Link className="link" to="/headlessui/popover">
          Popover
        </Link>
        <Link className="link" to="/headlessui/radiogroup">
          Radio Group
        </Link>
        <Link className="link" to="/headlessui/switch">
          Switch
        </Link>
        <Link className="link" to="/headlessui/tabs">
          Tabs
        </Link>
        <Link className="link" to="/headlessui/transition">
          Transition
        </Link>
      </nav>
    </>
  );
};

export default HeadlessUI;
