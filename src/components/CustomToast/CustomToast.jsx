import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Success toast
export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      background: "#ffffff",
      color: "#22c55e", // green
      fontWeight: "normal",
    },
    progressStyle: {
      background: "#22c55e",
      height: "4px",
    },
    closeButton: true,
  });
};

// Error toast
export const showError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      background: "#ffffff",
      color: "#ef4444", // red
      fontWeight: "normal",
    },
    progressStyle: {
      background: "#ef4444",
      height: "4px",
    },
    closeButton: true,
  });
};
