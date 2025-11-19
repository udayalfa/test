// LoaderContext.js
import React, { createContext, useContext, useState } from "react";

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
  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
}
