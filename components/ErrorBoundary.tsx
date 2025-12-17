"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 max-w-md w-full">
            <div className="flex flex-col items-center gap-4">
              <AlertCircle className="w-12 h-12 text-red-400" />
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
                <p className="text-white/60 mb-4">
                  We encountered an unexpected error. Please try refreshing the page.
                </p>
                {this.state.error && (
                  <details className="text-left mb-4">
                    <summary className="text-sm text-white/40 cursor-pointer mb-2">
                      Error details
                    </summary>
                    <pre className="text-xs text-red-400 bg-black/30 p-3 rounded overflow-auto max-h-32">
                      {this.state.error.toString()}
                    </pre>
                  </details>
                )}
                <button
                  onClick={this.handleReset}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors mx-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

