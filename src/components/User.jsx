import React from "react";
import SearchBar from "./SearchBar";
import useLocalStorage from "../hooks/useLocalStorage";
import PortfolioTable from "./PortfolioTable";

function User() {
  return (
    <div>
      <br />
      <SearchBar />
      <PortfolioTable />
    </div>
  );
}
export default User;
