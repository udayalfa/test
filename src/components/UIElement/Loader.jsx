import { createPortal } from "react-dom";

const Loader = () => {
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
};

export default Loader;
