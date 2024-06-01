import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getAllGoods = async () => {
  return axios.get(`${API_URL}/goodcatalog`);
};

export const createGood = async (goodData: any) => {
  return axios.post(`${API_URL}/goodcatalog`, goodData);
};

export const deleteGood = async (id: string) => {
  return axios.delete(`${API_URL}/goodcatalog/${id}`);
};
