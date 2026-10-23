import React, { useState } from "react";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import api from "../api";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const context = useContext(GeneralContext);

  const handleBuyClick = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      await api.post("/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });
      context.closeBuyWindow();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to place the order");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    context.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <p>Stock Name : {uid}</p>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              step="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick} disabled={isSubmitting}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick} disabled={isSubmitting}>
            Cancel
          </button>
        </div>
        {error && <p role="alert">{error}</p>}
      </div>
    </div>
  );
};

export default BuyActionWindow;