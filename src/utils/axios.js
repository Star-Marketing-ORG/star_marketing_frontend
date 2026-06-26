import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:7000/api",
  withCredentials: true,
});

let lastToast = "";
let lastToastTime = 0;

const showToastOnce = (message) => {
  const now = Date.now();

  // Prevent duplicate messages within 3 seconds
  if (lastToast === message && now - lastToastTime < 3000) {
    return;
  }

  lastToast = message;
  lastToastTime = now;

  toast.error(message);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // No response received -> network/backend unreachable
    if (!error.response) {
      showToastOnce(
        "Please check your internet connection and try again."
      );
      return Promise.reject(error);
    }

    const { status } = error.response;

    // Server errors
    if (status >= 500) {
      showToastOnce(
        "Something went wrong on our server. Please try again later."
      );
      return Promise.reject(error);
    }

    // Other errors (400, etc.)
    showToastOnce(
      error.response.data?.message || "Something went wrong."
    );

    return Promise.reject(error);
  }
);

export default axiosInstance;