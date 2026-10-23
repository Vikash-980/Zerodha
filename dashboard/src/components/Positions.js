import React from "react";
import { useEffect, useState } from "react";
import api from "../api";

const Positions = () => {
  const [allPositions,setAllPositions] = useState([]);
  const [error, setError] = useState("");

useEffect(()=>{
  api.get("/allPositions").then((res)=>{
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
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
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