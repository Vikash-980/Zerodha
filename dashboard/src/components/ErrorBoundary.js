import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Dashboard page crashed:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <main role="alert" className="content">
          <h2>Unable to display this dashboard page</h2>
          <p>{this.state.error.message}</p>
          <button onClick={() => window.location.reload()}>Reload page</button>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
