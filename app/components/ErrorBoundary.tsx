"use client"
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  errorUI?: any; //  ? more research is needed. string | object;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// default implementation
function logErrorToMyService(error : Error, erroInfo: ErrorInfo) {
  console.log('Error', error, erroInfo);
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error tracking service here\
    logErrorToMyService(error, errorInfo);
    // external bug tracking: Sentry (https://sentry.io/welcome/)
  }

  public render() {
    if (this.state.hasError) {
      // You can render a fallback UI here
      if (this.props.errorUI) {
        return this.props.errorUI;
      }
      return <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}
