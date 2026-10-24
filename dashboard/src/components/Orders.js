import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { formatNumber } from "../utils/formatNumber";
import getArrayResponse from "../utils/getArrayResponse";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/allOrders")
      .then((res) => {
        setAllOrders(getArrayResponse(res, "orders"));
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError("Unable to load orders. Please try again later.");
      });
  }, []);

  const orders = Array.isArray(allOrders) ? allOrders : [];

  return (
    <div className="orders">

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>{error || "You haven't placed any orders today"}</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <h3 className="title">Orders ({orders.length})</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{formatNumber(order.price)}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default Orders;
