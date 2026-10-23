import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import api from "../api";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const context = useContext(GeneralContext);

  useEffect(() => {
    api
      .get("/allOrders")
      .then((res) => {
        const orders = res.data;

        const totalBought = orders
          .filter((o) => o.name === uid && o.mode === "BUY")
          .reduce((sum, o) => sum + o.qty, 0);

        const totalSold = orders
          .filter((o) => o.name === uid && o.mode === "SELL")
          .reduce((sum, o) => sum + o.qty, 0);

        setAvailableQty(totalBought - totalSold);
      })
      .catch((requestError) => {
        console.error("Unable to fetch orders:", requestError);
        setError("Unable to load your available quantity");
      });
  }, [uid]);

  const handleSellClick = async () => {
    if (!Number.isInteger(Number(stockQuantity)) || Number(stockQuantity) <= 0) {
      setError("Quantity must be a positive whole number");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      await api.post("/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });
      context.closeSellWindow();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to place the order");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    context.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <p>Available Quantity: {availableQty}</p>

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
          <button className="btn btn-orange" onClick={handleSellClick} disabled={isSubmitting}>
            Sell
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

export default SellActionWindow;
