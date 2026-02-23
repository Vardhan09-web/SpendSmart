import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const addIncome = (userId, data) => {
  return axios.post(`${BASE_URL}/income/${userId}`, data);
};

export const addExpense = (userId, data) => {
  return axios.post(`${BASE_URL}/expenditure/${userId}`, data);
};