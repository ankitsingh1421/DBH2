import axios from "axios";

const api = axios.create({
    baseURL: "https://dbh2-2tr8.onrender.com", // Replace with your server URL
});

export default api;
