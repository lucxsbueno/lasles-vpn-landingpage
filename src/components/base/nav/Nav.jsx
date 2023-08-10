import React from "react";

import Logo from "../logo/Logo";

const Nav = () => {
  return (
    <div className="px-5 py-3 sm:pt-8 flex flex-row justify-center">
      <div className="w-full sm:max-w-[530px] md:max-w-[700px] lg:max-w-[862px] xl:max-w-[1200px] 2xl:max-w-[1380px]">

        <div className="flex flex-row items-center justify-between">
          <a href="/">
            <Logo />
          </a>

          <nav className="hidden lg:block">
            <ul className="flex flex-row gap-5">
              <li>
                <a href="/" className="text-slate-500 hover:opacity-80">About</a>
              </li>
              <li>
                <a href="/" className="text-slate-500 hover:opacity-80">Features</a>
              </li>
              <li>
                <a href="/" className="text-slate-500 hover:opacity-80">Pricing</a>
              </li>
              <li>
                <a href="/" className="text-slate-500 hover:opacity-80">Testimonials</a>
              </li>
              <li>
                <a href="/" className="text-slate-500 hover:opacity-80">Help</a>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <button className="text-secondary font-medium rounded-full px-4 py-1 hover:opacity-80">
              Sign In
            </button>
            <button className="border border-primary text-primary font-medium rounded-full px-4 py-1 hover:opacity-80">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Nav;