import React from "react";
import SearchBar from "./SearchBar";
import useLocalStorage from "../hooks/useLocalStorage";
import PortfolioTable from "./PortfolioTable";

function User() {
  const [users, setUsers] = useLocalStorage("users", [
    JSON.parse(window.localStorage.getItem("users")),
  ]);
  function decreaseBalance(event) {
    console.log(users);
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
      <br />
      <SearchBar />
      <PortfolioTable />
      <button name="balance" onClick={decreaseBalance}>
        -$
      </button>
    </div>
  );
}
export default User;
