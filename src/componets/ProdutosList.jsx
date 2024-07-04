import { useState, useEffect } from "react";
import { getAllProdutos, deleteProduto } from "../utils/api";

const ProdutosList = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  useEffect(() => {
    if (filtro.trim() === "") {
      setProdutosFiltrados(produtos);
    } else {
      const produtosFiltrados = produtos.filter((produto) =>
        produto.descricao.toLowerCase().includes(filtro.toLowerCase())
      );
      setProdutosFiltrados(produtosFiltrados);
    }
  }, [filtro, produtos]);

  const fetchProdutos = async () => {
    const data = await getAllProdutos();
    setProdutos(data);
    setProdutosFiltrados(data);
  };

  const handleDeleteProduto = async (id) => {
    await deleteProduto(id);
    fetchProdutos();
  };

  return (
    <div className="max-w-7xl mx-auto p-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Produtos</h1>
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
      />
      <table className="min-w-full divide-y divide-gray-200 mt-4 rounded-md">
      <thead className="bg-gray-50 rounded-md">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Código
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Descrição
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantidade
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Data Vencimento
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {produtosFiltrados.map((produto) => {
            // Calcula a diferença de dias entre a data atual e a data de vencimento do produto
            const dataVencimento = new Date(produto.dataVencimento);
            const diffDias = Math.ceil(
              (dataVencimento.getTime() - Date.now()) / (1000 * 3600 * 24)
            );

            // Determina a classe CSS com base na diferença de dias
            let corClasse = "";
            if (diffDias <= 1) {
              corClasse = "bg-red-500"; // Vermelho se vence hoje ou já venceu
            } else if (diffDias <= 3) {
              corClasse = "bg-yellow-500"; // Amarelo se faltar até 3 dias para vencer
            } else {
              corClasse = "bg-green-500"; // Verde se faltar mais de 3 dias para vencer
            }

            return (
              <tr key={produto.id}>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {produto.codigo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {produto.descricao}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {produto.quantidade}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-black ${corClasse}`}
                >
                  {dataVencimento.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  <button
                    onClick={() => handleDeleteProduto(produto.id)}
                    className="py-2 px-4 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProdutosList;
