import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import api from "../api";
import { formatNumber, toFiniteNumber } from "../utils/formatNumber";
import getArrayResponse from "../utils/getArrayResponse";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/allHoldings").then((res) => {
      setAllHoldings(getArrayResponse(res, "holdings"));
    }).catch((requestError) => {
      console.error("Unable to fetch holdings:", requestError);
      setError("Unable to load holdings. Please try again later.");
    });
  }, []);

  const holdings = Array.isArray(allHoldings) ? allHoldings : [];

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = holdings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      {error && <p role="alert">{error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
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
                  <td>{stock.name}</td>
                  <td>{formatNumber(stock.qty)}</td>
                  <td>{formatNumber(stock.avg)}</td>
                  <td>{formatNumber(stock.price)}</td>
                  <td>{formatNumber(curValue)}</td>
                  <td className={profClass}>
                    {formatNumber(profitLoss)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;