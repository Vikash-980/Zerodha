require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { MONGO_URL } = process.env;
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const app = express();
app.disable("etag");
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
  ...(process.env.ALLOWED_ORIGINS || "").split(","),
  ...(!isProduction ? ["http://localhost:3000", "http://localhost:3001"] : []),
]
  .map((origin) => origin && origin.trim())
  .filter(Boolean  );

  if (!MONGO_URL || !process.env.TOKEN_KEY) {
    console.error("MONGO_URL and TOKEN_KEY must be configured before starting the API");
    process.exit(1);
  }

  mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.use(
  cors({
    origin: (origin, callback) => {
      const isLocalDevelopmentOrigin =
        process.env.NODE_ENV !== "production" &&
        /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin || "");
      const isVercelAppDeployment =
        /^https:\/\/zerodha(?:-dash)?-[a-z0-9]+-vikash-980s-projects\.vercel\.app$/.test(
          origin || ""
        );
      callback(
        null,
        !origin ||
          allowedOrigins.includes(origin) ||
          isLocalDevelopmentOrigin ||
          isVercelAppDeployment
      );
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

app.get("/health", (req, res) => {
  const isDatabaseConnected = mongoose.connection.readyState === 1;
  res.status(isDatabaseConnected ? 200 : 503).json({
    status: isDatabaseConnected ? "ok" : "starting",
    database: isDatabaseConnected ? "connected" : "disconnected",
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Zerodha Clone Backend Live!" });
});

app.get("/allHoldings", async (req, res, next) => {
  try {
    res.json(await HoldingsModel.find({}));
  } catch (error) {
    next(error);
  }
});

app.get("/allPositions", async (req, res, next) => {
  try {
    res.json(await PositionsModel.find({}));
  } catch (error) {
    next(error);
  }
});

app.get("/allOrders", async (req, res, next) => {
  try {
    res.json(await OrdersModel.find({}));
  } catch (error) {
    next(error);
  }
});

app.post("/newOrder", async (req, res, next) => {
  try {
    const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const mode = typeof req.body.mode === "string" ? req.body.mode.toUpperCase() : "";

    if (
      !name ||
      !Number.isInteger(qty) ||
      qty <= 0 ||
      !Number.isFinite(price) ||
      price < 0 ||
      !["BUY", "SELL"].includes(mode)
    ) {
      return res.status(400).json({ message: "Invalid order details" });
    }

    if (mode === "SELL") {
      const orders = await OrdersModel.find({ name });
      const availableQty = orders.reduce(
        (total, order) => total + (order.mode === "BUY" ? order.qty : -order.qty),
        0
      );
      if (qty > availableQty) {
        return res.status(400).json({ message: "Not enough stocks to sell" });
      }
    }

    const newOrder = await OrdersModel.create({ name, qty, price, mode });
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error("Request failed:", error);
  res.status(500).json({ message: "An unexpected server error occurred" });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
