import React from "react";
import logo from "../images/muni.png";

function Header() {
  return (
    <div>
      <section class="colored-section" id="title">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="/">
              <img id="logo" src={logo} alt="" height="28" />
              muni
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Header;
