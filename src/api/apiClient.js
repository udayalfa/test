import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3004/api/v1",
  withCredentials: true,
});

export default apiClient;
