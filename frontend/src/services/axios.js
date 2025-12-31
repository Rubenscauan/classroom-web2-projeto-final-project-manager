import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-user-id": "1",    
    "x-user-role": "admin",
  },
});

export default api;
