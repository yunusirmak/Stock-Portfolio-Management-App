import React from "react";
import logo from "../images/muni.png";
import useLocalStorage from "../hooks/useLocalStorage";

function Header() {
  const [users, setUsers] = useLocalStorage("users", [
    JSON.parse(window.localStorage.getItem("users")),
  ]);
  const [isAuth, setisAuth] = useLocalStorage("isAuth", [
    JSON.parse(window.localStorage.getItem("isAuth")),
  ]);
  function handleSignOut(event) {
    localStorage.setItem("isAuth", false);
    window.location.reload();
    event.preventDefault();
  }
  return (
    <div>
      {isAuth ? (
        <div>
          <section class="colored-section" id="title">
            <nav class="navbar navbar-expand-md navbar-dark">
              <div class="container-fluid">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                  <a class="navbar-brand me-auto" href="/">
                    <img id="logo" src={logo} alt="" height="28" />
                    muni
                  </a>
                </div>
                <div class="mx-auto order-0">
                  <h6 class=" mx-auto" style={{ width: "200px" }} href="#">
                    Total Worth: $10000
                  </h6>
                  <h6 class=" mx-auto" style={{ width: "200px" }} href="#">
                    Cash Balance: ${users[0].balance.toFixed(2)}
                  </h6>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".dual-collapse2"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        {users[0].name}
                      </a>
                    </li>
                  </ul>
                  <button
                    onClick={handleSignOut}
                    class=" navbar-nav ms-auto"
                    type="button"
                    class="btn btn-light"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </nav>
          </section>
        </div>
      ) : (
        <div>
          <section class="colored-section" id="title">
            <nav class="navbar navbar-expand-md navbar-dark">
              <div class="container-fluid">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                  <a class="navbar-brand me-auto" href="/">
                    <img id="logo" src={logo} alt="" height="28" />
                    muni
                  </a>
                </div>
              </div>
            </nav>
          </section>
        </div>
      )}
    </div>
  );
}

export default Header;
