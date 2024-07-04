import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Função para obter todos os produtos
export const getAllProdutos = async () => {
  const response = await axios.get(`${API_URL}/produtos`);
  return response.data;
};

// Função para adicionar um novo produto
export const addProduto = async (produto) => {
  const response = await axios.post(`${API_URL}/produtos`, produto);
  return response.data;
};

// Função para atualizar um produto existente
export const updateProduto = async (produto) => {
  const response = await axios.put(`${API_URL}/produtos/${produto.id}`, produto);
  return response.data;
};

// Função para excluir um produto
export const deleteProduto = async (id) => {
  const response = await axios.delete(`${API_URL}/produtos/${id}`);
  return response.data;
};
