import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";

function StockModal(props) {
  const price = props.stockPrice;
  const [total, setTotal] = useState("");
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
        </ModalBody>
        <ModalFooter>
          <h4>
            <b>Total:</b> ${(total * price).toFixed(2)}
          </h4>
          &nbsp;&nbsp;
          <Button variant="success" onClick={props.onHide}>
            BUY ({props.stockSymbol})
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default StockModal;
