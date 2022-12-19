import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyLoginSuccess = () =>
  toast.success("Login is correct", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyLoginError = () =>
  toast.error("Login or password incorrect", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
export const notification = (type, text) =>
  toast[type](text, {
    position: "top-center",
    autoClose: 3000,
    zIndex: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const ToastContainers = () => (
  <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);
