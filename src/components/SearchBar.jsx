import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import BookData from "./Data.json";
import StockModal from "./StockModal";
import axios from "axios";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [currentStock, setCurrentStock] = useState({ name: "", symbol: "" });
  const [modalShow, setModalShow] = React.useState(false);

  const [price, setPrice] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  const baseURL =
    "https://cloud.iexapis.com/stable/stock/" +
    currentStock.symbol.toLowerCase() +
    "/quote?token=" +
    key;
  const loadProfile = async () => {
    await axios
      .get(baseURL)
      .then((res) => {
        setPrice(res.data.latestPrice);
      })
      .catch((err) => console.log(err));
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = BookData.filter((value) => {
      return value.companyName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  useEffect(() => {
    loadProfile();
  });

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter a stock name"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                onClick={() => {
                  setCurrentStock({
                    name: value.companyName,
                    symbol: value.symbol,
                  });
                  setModalShow(true);
                }}
              >
                <p>{value.companyName} </p>
              </a>
            );
          })}
        </div>
      )}
      <StockModal
        show={modalShow}
        stockName={currentStock.name}
        stockSymbol={currentStock.symbol}
        stockPrice={price}
        onHide={() => {
          setModalShow(false);
          setPrice("");
        }}
      />
    </div>
  );
}

export default SearchBar;
