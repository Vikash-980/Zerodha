import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import ErrorBoundary from "./ErrorBoundary";

const Home = () => {
  return (
    <ErrorBoundary>
      <>
        <TopBar />
        <Dashboard />
      </>
    </ErrorBoundary>
  );
};

export default Home;