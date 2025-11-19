import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
function ImageModal({ src, alt, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay to trigger opening animation
    setTimeout(() => setVisible(true), 10);
    return () => setVisible(false);
  }, []);

  const handleClose = () => {
    // Reverse animation before closing
    setVisible(false);
    setTimeout(onClose, 250);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/60 z-50 backdrop-blur-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative transform transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <img
          src={src}
          alt={alt}
          className="sm:max-h-[90vh] sm:max-w-[90vw] rounded-xl shadow-lg select-none"
        />
        <RxCross2 className="absolute top-3 right-3 cursor-pointer bg-white/80 hover:bg-white text-black  rounded-full w-7 h-7  transition-transform duration-200 hover:rotate-90" onClick={handleClose} />
      </div>
    </div>
  );
}

export default ImageModal;
