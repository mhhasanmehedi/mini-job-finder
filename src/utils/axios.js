import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://book-store-server-kohl.vercel.app/api",
});

export default axiosInstance;
