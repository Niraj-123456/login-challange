import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.common["cb-client-api-key"] =
  "6df22a6a-c971-493f-9161-6ecfc72ddc35";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

export default {
  post: axios.post,
};
