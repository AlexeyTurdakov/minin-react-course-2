import React from "react";

// позволяет более удобно обрабатывать ошибки
// должен быть стейт
export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  // оборачивает другие компоненты в себя и красиво их выводит
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error</h2>;
    }

    return this.props.children;
  }
}
