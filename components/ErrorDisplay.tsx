"use client";

import { AlertCircle, RefreshCw, HelpCircle } from "lucide-react";
import { useState } from "react";

interface ErrorDisplayProps {
  error: string | Error;
  onRetry?: () => void;
  retryLabel?: string;
  showHelp?: boolean;
  className?: string;
}

export function ErrorDisplay({
  error,
  onRetry,
  retryLabel = "Try again",
  showHelp = true,
  className = "",
}: ErrorDisplayProps) {
  const [showDetails, setShowDetails] = useState(false);
  const errorMessage = error instanceof Error ? error.message : error;

  // Parse error message to provide helpful suggestions
  const getHelpfulMessage = (msg: string): { message: string; suggestion?: string } => {
    const lowerMsg = msg.toLowerCase();

    if (lowerMsg.includes("credit") || lowerMsg.includes("insufficient")) {
      return {
        message: "Insufficient credits",
        suggestion: "You don't have enough credits to perform this action. Please purchase more credits to continue.",
      };
    }

    if (lowerMsg.includes("network") || lowerMsg.includes("fetch") || lowerMsg.includes("connection")) {
      return {
        message: "Network error",
        suggestion: "Please check your internet connection and try again. If the problem persists, the server may be temporarily unavailable.",
      };
    }

    if (lowerMsg.includes("auth") || lowerMsg.includes("unauthorized") || lowerMsg.includes("token")) {
      return {
        message: "Authentication error",
        suggestion: "Your session may have expired. Please log out and log back in.",
      };
    }

    if (lowerMsg.includes("timeout") || lowerMsg.includes("timed out")) {
      return {
        message: "Request timed out",
        suggestion: "The request took too long to complete. Please try again. If this persists, the server may be experiencing high load.",
      };
    }

    if (lowerMsg.includes("not found") || lowerMsg.includes("404")) {
      return {
        message: "Resource not found",
        suggestion: "The requested resource could not be found. It may have been deleted or moved.",
      };
    }

    if (lowerMsg.includes("rate limit") || lowerMsg.includes("429")) {
      return {
        message: "Rate limit exceeded",
        suggestion: "You've made too many requests. Please wait a moment before trying again.",
      };
    }

    return {
      message: errorMessage,
      suggestion: "An unexpected error occurred. Please try again or contact support if the problem persists.",
    };
  };

  const { message, suggestion } = getHelpfulMessage(errorMessage);

  return (
    <div className={`bg-red-500/10 border border-red-500/30 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-red-400 mb-1">{message}</div>
          {suggestion && showHelp && (
            <div className="text-sm text-white/60 mb-3">{suggestion}</div>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm px-4 py-2 rounded transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                {retryLabel}
              </button>
            )}
            {showHelp && suggestion && (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-white/60 hover:text-white/80 text-sm px-3 py-2 rounded transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                {showDetails ? "Hide" : "Show"} details
              </button>
            )}
          </div>
          {showDetails && error instanceof Error && (
            <details className="mt-3">
              <summary className="text-xs text-white/40 cursor-pointer mb-2">Technical details</summary>
              <pre className="text-xs text-red-400 bg-black/30 p-3 rounded overflow-auto max-h-32">
                {error.stack || error.toString()}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}

