import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

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
          users[0].password
      );
    } else {
      console.log("User does not exist");
    }
  }
  return (
    <div>
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
    </div>
  );
}

export default App;
