import React, { Component, ErrorInfo, ReactNode } from "react";

import Flex from "components/Flex";

import { IS_PROD } from "utils/constants";

import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleRestart = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.error) {
      return IS_PROD ? (
        <Flex className={styles.wrap}>
          <Flex className={styles.content} direction="column" align="center" justify="center">
            <h2>
              Something went wrong<span className="redText">.</span>
            </h2>
            <button className="button" onClick={this.handleRestart}>
              Restart<span className="blackText">.</span>
            </button>
          </Flex>
        </Flex>
      ) : (
        <Flex className={styles.devError} direction="column" align="center" justify="center">
          <h2>MESSAGE</h2>
          <p>{this.state.error.message}</p>
          <h2>COMPONENT STACK</h2>
          {this.state.errorInfo && <pre>{this.state.errorInfo.componentStack}</pre>}
        </Flex>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
