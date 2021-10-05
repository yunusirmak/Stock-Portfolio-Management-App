import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import useLocalStorage from "../hooks/useLocalStorage";

function StockModal(props) {
  const [users, setUsers] = useLocalStorage("users", [
    JSON.parse(window.localStorage.getItem("users")),
  ]);
  const price = props.stockPrice;
  const [total, setTotal] = useState("");
  const [boughtStock, setBoughtStock] = useState(
    JSON.parse(window.localStorage.getItem("users[0].stocks"))
  );
  const [balanceLow, setBalanceLow] = useState(false);
  useEffect(() => {
    setUsers((prevUsers) => {
      return [
        {
          ...prevUsers[0],
          balance: prevUsers[0].balance - boughtStock.total,
          stocks: [...prevUsers[0].stocks, boughtStock],
          totalStock: prevUsers[0].totalStock - boughtStock.amount,
        },
      ];
    });
    console.log(users);
  }, [boughtStock]);
  function buyStock(event) {
    if (users[0].balance > total * price) {
      setBoughtStock({
        name: props.stockName,
        symbol: props.stockSymbol,
        amount: total,
        total: (total * price).toFixed(2),
      });
      setBalanceLow(false);
      window.location.reload();
    } else setBalanceLow(true);
  }
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          <ModalTitle id="contained-modal-title-vcenter">
            {props.stockSymbol}
          </ModalTitle>
          <button
            onClick={() => {
              props.onHide();
              setTotal(0);
              setBalanceLow(false);
            }}
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </ModalHeader>
        <ModalBody>
          <h4> {props.stockName}</h4>
          <br />
          <h4>
            <b>Price =</b> ${price}
          </h4>
          <br />
          <h5>
            <b>Amount:</b> &nbsp;
            <input
              onChange={(event) => {
                setTotal(event.target.value);
              }}
              placeholder="Enter the stock amount"
              type="number"
              min="0"
              step="1"
            />
          </h5>
          {balanceLow && (
            <div>
              <br />
              <h5 style={{ color: "red" }}>Balance is not enough!!!</h5>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <h4>
            <b>Total:</b> ${(total * price).toFixed(2)}
          </h4>
          &nbsp;&nbsp;
          <Button variant="success" onClick={buyStock}>
            BUY ({props.stockSymbol})
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default StockModal;
