import React from "react";
import { useEffect, useState } from "react";
import api from "../api";
import { formatNumber, toFiniteNumber } from "../utils/formatNumber";

const Positions = () => {
  const [allPositions,setAllPositions] = useState([]);
  const [error, setError] = useState("");

useEffect(()=>{
  api.get("/allPositions").then((res)=>{
    if (!Array.isArray(res.data)) {
      throw new Error("The positions API returned an invalid response");
    }
    setAllPositions(res.data);
  }).catch((requestError) => {
    console.error("Unable to fetch positions:", requestError);
    setError("Unable to load positions. Please try again later.");
  });
},[])
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      {error && <p role="alert">{error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const qty = toFiniteNumber(stock.qty) ?? 0;
              const avg = toFiniteNumber(stock.avg) ?? 0;
              const price = toFiniteNumber(stock.price) ?? 0;
              const curValue = price * qty;
              const profitLoss = curValue - avg * qty;
              const isProfit = profitLoss >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{formatNumber(stock.qty)}</td>
                  <td>{formatNumber(stock.avg)}</td>
                  <td>{formatNumber(stock.price)}</td>
                  <td className={profClass}>
                    {formatNumber(profitLoss)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;