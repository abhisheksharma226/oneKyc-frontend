import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
          <img src={Logo} alt="Logo" className="w-20 h-auto object-contain" />

              {/* <span>One-KYC</span> */}
</div>

            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">Home</a>
                </li>
                {/* <li>
                  <a href="#">Features</a>
                </li> */}
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Registration</a>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/login">
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
