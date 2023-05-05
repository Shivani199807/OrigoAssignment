import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  navigateAbout,
  navigateMenu,
  navigateOffers,
  navigateContact,
}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  navbarNewItem">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          backgroundColor: "#ffd7ad",
        }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex justify-content-center "
        id="navbarNav"
      >
        <ul class="navbar-nav flex align-items-center justify-content-center ">
          <li class="nav-item active">
            <Link class="nav-link linkDesign" to={"/"}>
              HOME <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item linkDesign" onClick={navigateAbout}>
            <Link class="nav-link" to={"/"}>
              ABOUT
            </Link>
          </li>
          <li class="nav-item linkDesign" onClick={navigateMenu}>
            <Link class="nav-link" to={"/"}>
              MENU
            </Link>
          </li>
          <li class="nav-item linkDesign" onClick={navigateOffers}>
            <Link class="nav-link" to={"/"}>
              OFFERS
            </Link>
          </li>
          <li class="nav-item linkDesign" onClick={navigateContact}>
            <Link class="nav-link" to={"/"}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
