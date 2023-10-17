// Bismillah

import GitHub from "../../public/assets/icons/GitHub.svg";
import React from "react";
import Arrow from "../../public/assets/icons/arrow.svg";
import Search from "../../public/assets/icons/arrow.svg";

const Navbar = () => {
  return (
    <header className="bg-slate-300">
      <div className="container">
        <nav className="header-nav">
          <div className="flex gap-x-8">
            <img src={GitHub.src} alt="logo" />
            <div className="flex gap-x-8 justify-between">
              <div className="flex items-center gap-x-[4]">
                <p>Product</p>
                <img src={Arrow.src} alt="Arrow icon" />
              </div>
              <div className="flex items-center gap-x-[4]">
                <p>Solutions</p>
                <img src={Arrow.src} alt="Arrow icon" />
              </div>
              <div className="flex items-center gap-x-[4]">
                <p>Open Source</p>
                <img src={Arrow.src} alt="Arrow icon" />
              </div>
              <div className="flex items-center gap-x-[4]">
                <p>Pricing</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              className="searching"
              placeholder="Search or jump to..."
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
