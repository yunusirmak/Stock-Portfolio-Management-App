import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function User() {
  const [users, setUsers] = useLocalStorage("users", [
    JSON.parse(window.localStorage.getItem("users")),
  ]);
  function handleSignOut(event) {
    localStorage.setItem("isAuth", false);
    window.location.reload();
    event.preventDefault();
  }
  function decreaseBalance(event) {
    setUsers((prevUsers) => {
      return [
        {
          ...prevUsers[0],
          balance: prevUsers[0].balance - 100,
        },
      ];
    });
  }
  return (
    <div>
      <h1>You are logged in {users[0].name}!</h1>
      <h1>Your balance is {users[0].balance}$!</h1>
      <button name="balance" onClick={decreaseBalance}>
        -$
      </button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
export default User;