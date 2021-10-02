import React, { useState } from "react";

function Register() {
  const [isSignUp, setSignUp] = useState(false);
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
            <input id="register-input" type="text" placeholder="Name" />
            <input id="register-input" type="email" placeholder="Email" />
            <input id="register-input" type="password" placeholder="Password" />
            <button class="register-button">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form id="register-form" action="#">
            <h1 id="register-h1">Sign in</h1>
            <span id="register-span">with your account</span>
            <input id="register-input" type="email" placeholder="Email" />
            <input id="register-input" type="password" placeholder="Password" />
            <a href="#" id="register-a">
              Forgot your password?
            </a>
            <button class="register-button">Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 id="register-h1">Welcome Back!</h1>
              <p id="register-p">
                To keep connected with us please login with your personal info
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
              <h1 id="register-h1">Hello, Friend!</h1>
              <p id="register-p">
                Enter your personal details and start journey with us
              </p>
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
