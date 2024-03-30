// api/Api.js

import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-cpns.creazylab.works/api", // Replace this with your actual API base URL
});

// Api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default Api;
