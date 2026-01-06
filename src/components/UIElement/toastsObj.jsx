import toast from "react-hot-toast";

// Success toast
export const success = (message) => {
  toast.success(message, {
    icon: "✅",
    style: {
      background: "#d4edda", // light green
      color: "#155724",       // dark green text
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "16px",
      minWidth: "250px",
    },
  });
};

// Info toast
export const info = (message) => {
  toast(message, {
    icon: "ℹ️",
    style: {
      background: "#d1ecf1", // light blue
      color: "#0c5460",       // dark blue text
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "16px",
      minWidth: "250px",
    },
  });
};

// Error toast
export const error = (message) => {
  toast.error(message, {
    icon: "❌",
    style: {
      background: "#f8d7da", // light red/pink
      color: "#721c24",       // dark red text
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "16px",
      minWidth: "250px",
    },
  });
};
