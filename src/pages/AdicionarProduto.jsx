// src/pages/Home.jsx
import { useState } from 'react';
import IncluirProduto from '../componets/IncluirProduto'


export function AdicionarProduto() {
  const [produtos, setProdutos] = useState([]);

  const handleProdutoAdicionado = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div className="content">
      <IncluirProduto onProdutoAdicionado={handleProdutoAdicionado} />
    </div>
  );
}