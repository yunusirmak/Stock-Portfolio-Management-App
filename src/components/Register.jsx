import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Register() {
  const [isAuth, setisAuth] = useLocalStorage("isAuth", false);
  const [isSignUp, setSignUp] = useState(false);

  const [credential, setCredential] = useState({
    cMail: "",
    cPassword: "",
  });

  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const [users, setUsers] = useLocalStorage("users", []);

  function signUpChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
        balance: 10000,
        stocks: [],
      };
    });
  }
  function signInChange(event) {
    const { name, value } = event.target;

    setCredential((prevCredential) => {
      return {
        ...prevCredential,
        [name]: value,
      };
    });
  }
  function handleSignUp(event) {
    setUsers([user]);
    setSignUp(false);
    event.preventDefault();
  }
  function handleSignIn(event) {
    if (
      users[0].mail === credential.cMail &&
      users[0].password === credential.cPassword
    ) {
      console.log("Credentials are true!");
      setisAuth(true);
      console.log(isAuth);
      window.location.reload();
    } else {
      console.log("Credentials are false!");
      setisAuth(false);
    }
    event.preventDefault();
  }
  return (
    <div id="register-body">
      <div
        id="register-container"
        className={isSignUp ? "container right-panel-active" : "container"}
      >
        <div class="form-container sign-up-container">
          <form id="register-form" action="#">
            <h1 id="register-h1">Create Account</h1>
            <span id="register-span">use your email for registration</span>
            <input
              id="register-input"
              onChange={signUpChange}
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
            />
            <input
              id="register-input"
              onChange={signUpChange}
              type="email"
              name="mail"
              placeholder="Email"
              value={user.mail}
            />
            <input
              id="register-input"
              onChange={signUpChange}
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
            />
            <button class="register-button" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form id="register-form" action="#">
            <h1 id="register-h1">Sign in</h1>
            <br />
            <input
              id="register-input"
              onChange={signInChange}
              type="email"
              name="cMail"
              placeholder="Email"
            />
            <input
              id="register-input"
              onChange={signInChange}
              type="password"
              name="cPassword"
              placeholder="Password"
            />
            <br />
            <button onClick={handleSignIn} class="register-button">
              Sign In
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 id="register-h1">Already Have an Account?</h1>
              <p id="register-p">
                You can just login with <br /> your email and password
              </p>
              <button
                onClick={() => setSignUp(false)}
                class="ghost register-button"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 id="register-h1">Don't Have an Account Yet?</h1>
              <p id="register-p">You can create one with your email</p>
              <button
                onClick={() => setSignUp(true)}
                class="ghost register-button"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
