import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PortfolioTable() {
  const [users, setUsers] = useLocalStorage("users", [
    JSON.parse(window.localStorage.getItem("users")),
  ]);
  const currentdate = new Date();
  const datetime =
    "LAST UPDATED: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return (
    <div
      style={{
        width: "1000px",
        margin: "auto",
        paddingTop: "100px",
      }}
    >
      {users[0].totalStock < 0 && (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> </th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Buy Price</th>
                <th>Stocks</th>
                <th>Holdings</th>
                <th>Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users[0].stocks.map((stock, index) => {
                return (
                  <tr>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>{stock.symbol}</td>
                    <td>{stock.name}</td>
                    <td>{(stock.total / stock.amount).toFixed(2)}</td>
                    <td>{stock.amount}</td>
                    <td>{stock.total}</td>
                    <td>{(stock.total / stock.amount).toFixed(2)}</td>
                    <td>
                      <Button style={{ backgroundColor: "green" }}>BUY</Button>
                    </td>
                    <td>
                      <Button style={{ backgroundColor: "red" }}>SELL</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>TOTAL</th>
                <th></th>
                <th></th>
                <th>{Math.abs(users[0].totalStock)}</th>
                <th>{(10000 - users[0].balance).toFixed(2)}</th>
                <th>{(10000 - users[0].balance).toFixed(2)}</th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </Table>
          <h5 style={{ textAlign: "left" }}>{datetime}</h5>
        </div>
      )}
    </div>
  );
}

export default PortfolioTable;
