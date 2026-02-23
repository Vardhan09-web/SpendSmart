import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getUserBalance = (userId) => {
  return axios.get(`${BASE_URL}/balance/${userId}`);
};