import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import api from "../api";

jest.mock("../api", () => ({
  get: jest.fn(),
}));

jest.mock("./DoughnoutChart", () => ({
  DoughnutChart: () => null,
}));

jest.mock("./VerticalGraph", () => ({
  VerticalGraph: () => null,
}));

const dashboardData = {
  "/allHoldings": [
    { name: "INFY", qty: 2, avg: 1400, price: 1500, net: "+7%", day: "+1%" },
  ],
  "/allPositions": [
    { product: "NRML", name: "NIFTY", qty: 1, avg: 100, price: 110, day: "+10%" },
  ],
  "/allOrders": [
    { name: "TCS", qty: 3, price: 3200, mode: "BUY" },
  ],
};

beforeEach(() => {
  api.get.mockImplementation((path) =>
    Promise.resolve({ data: dashboardData[path] })
  );
});

test.each([
  ["/holdings", "Holdings (1)", "INFY"],
  ["/positions", "Positions (1)", "NIFTY"],
  ["/orders", "Orders (1)", "TCS"],
])("renders the %s page without crashing", async (route, heading, instrument) => {
  render(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Home />
    </MemoryRouter>
  );

  expect(await screen.findByText(heading)).toBeInTheDocument();
  expect(await screen.findAllByText(instrument)).not.toHaveLength(0);
});

test("menu navigation switches between data pages without a blank screen", async () => {
  render(
    <MemoryRouter initialEntries={["/"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Home />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole("link", { name: "Holdings" }));
  expect(await screen.findByText("Holdings (1)")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: "Positions" }));
  expect(await screen.findByText("Positions (1)")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: "Orders" }));
  expect(await screen.findByText("Orders (1)")).toBeInTheDocument();

  await waitFor(() => {
    expect(api.get).toHaveBeenCalledWith("/allHoldings");
    expect(api.get).toHaveBeenCalledWith("/allPositions");
    expect(api.get).toHaveBeenCalledWith("/allOrders");
  });
});

test.each([
  ["/holdings", "/allHoldings", "Holdings (0)"],
  ["/positions", "/allPositions", "Positions (0)"],
  ["/orders", "/allOrders", "Unable to load orders. Please try again later."],
])("does not crash when %s receives a non-array API response", async (route, endpoint, message) => {
  api.get.mockImplementationOnce(() => Promise.resolve({ data: { message: "Unauthorized" } }));

  render(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Home />
    </MemoryRouter>
  );

  expect(await screen.findByText(message)).toBeInTheDocument();
  expect(api.get).toHaveBeenCalledWith(endpoint);
});
