import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Register from "./Register";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [users, setUsers] = useLocalStorage("users", []);
  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
        balance: 10000,
        favs: ["apple", "facebook"],
      };
    });
  }

  function handleSubmit(event) {
    setUsers([user]);
    event.preventDefault();
  }

  function showUsers(userInfo) {
    return (
      <div>
        <ul>
          <li>{userInfo.username}</li>
          <li>{userInfo.password}</li>
        </ul>
      </div>
    );
  }

  function searchUser(event) {
    if (users[0].username === user.username) {
      console.log(
        users[0].username +
          " does exist and it's password is " +
          users[0].password +
          users[0].favs
      );
    } else {
      console.log("User does not exist");
    }
  }
  return (
    <div>
      <Header />
      <h1>Portfolio App</h1>
      <form action="">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Username"
          name="username"
          value={user.username}
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          name="password"
          value={user.password}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <br />
      <div>{users.map(showUsers)}</div>

      <div className="search">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Username"
          name="username"
          value={user.username}
        />
        <button onClick={searchUser}>Search</button>
      </div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
