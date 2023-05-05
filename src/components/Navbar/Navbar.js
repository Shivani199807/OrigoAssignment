import React, { useState } from "react";

import "./Navbar.css";

function Navbar() {
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
            <a class="nav-link linkDesign" href="#">
              HOME <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item linkDesign">
            <a class="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li class="nav-item linkDesign">
            <a class="nav-link" href="#">
              MENU
            </a>
          </li>
          <li class="nav-item linkDesign">
            <a class="nav-link" href="#">
              OFFERS
            </a>
          </li>
          <li class="nav-item linkDesign">
            <a class="nav-link" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
