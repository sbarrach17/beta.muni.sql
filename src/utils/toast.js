import { toast } from "react-toastify";

export const successToast = (message = "") => {
  return toast(` ${message}`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    progressStyle: {
      background: "#5cb85c"
    },
  });
};

export const errorToast = (message = "") => {
  return toast.error(` ${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};