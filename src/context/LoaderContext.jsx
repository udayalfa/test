// LoaderContext.js
import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const show = () => setLoading(true);
  const hide = () => setLoading(false);
  return (
    <LoaderContext.Provider value={{ show, hide }}>
      {/* Show the loader if loading is true */}
      {loading && <GlobalLoader />}
      {children}
    </LoaderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLoader() {
  return useContext(LoaderContext);
}

// Loader component with full screen overlay
function GlobalLoader() {
   return createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6">
          {/* Animated circles */}
          <div className="flex space-x-4">
            <span className="w-4 h-4 bg-white rounded-full animate-ping animation-delay-0"></span>
            <span className="w-4 h-4 bg-white rounded-full animate-ping animation-delay-150"></span>
            <span className="w-4 h-4 bg-white rounded-full animate-ping animation-delay-300"></span>
          </div>
  
          {/* Minimal luxury text */}
          <p className="text-white/70 text-xs tracking-widest uppercase animate-pulse">
            Loading
          </p>
        </div>
  
        {/* Custom delays */}
        <style>
          {`
            .animation-delay-0 { animation-delay: 0s; }
            .animation-delay-150 { animation-delay: 0.15s; }
            .animation-delay-300 { animation-delay: 0.3s; }
          `}
        </style>
      </div>,
      document.body
    );
}
