import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchTickets = async () => {
  const response = await axios.get(`${API_URL}/tickets`);
  return response.data;
};

export const createTicket = async (title, description) => {
  const response = await axios.post(`${API_URL}/tickets`, { title, description });
  return response.data;
};
