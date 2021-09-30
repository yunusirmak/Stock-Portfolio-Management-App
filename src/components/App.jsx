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
    setUsers([...users, user]);
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
    </div>
  );
}

export default App;
