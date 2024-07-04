import { useState } from 'react';
import PropTypes from 'prop-types';
import { addProduto } from '../utils/api';

const IncluirProduto = ({ onProdutoAdicionado }) => {
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!codigo || !descricao || !quantidade || !dataVencimento) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const novoProduto = { 
        codigo, 
        descricao, 
        quantidade: parseInt(quantidade), 
        dataVencimento 
      };
      const produtoAdicionado = await addProduto(novoProduto);
      onProdutoAdicionado(produtoAdicionado);
      setCodigo('');
      setDescricao('');
      setQuantidade('');
      setDataVencimento('');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Ocorreu um erro ao adicionar o produto. Por favor, tente novamente.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Adicionar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">Código:</label>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-white text-gray-900"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">Descrição:</label>
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-white text-gray-900"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">Quantidade:</label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-white text-gray-900"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">Data de Vencimento:</label>
            <input
              type="date"
              value={dataVencimento}
              onChange={(e) => setDataVencimento(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-white text-gray-900"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Adicionar Produto
          </button>
        </div>
      </form>
    </div>
  );
};

IncluirProduto.propTypes = {
  onProdutoAdicionado: PropTypes.func.isRequired,
};

export default IncluirProduto;
