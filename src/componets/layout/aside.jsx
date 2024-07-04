import { Link } from "react-router-dom";

export function Aside() {
  return (
    <aside className="flex flex-col gap-2 mt-16 p-5 bg-gray-900 w-1/4 align-middle h-svh">
      <nav className="space-y-4">
        <section className="border-b border-gray-700 pb-2">
          <h3 className="text-lg font-semibold">
            <Link
              to="/"
              className="text-white hover:text-indigo-500 transition-colors duration-200"
            >
              Home
            </Link>
          </h3>
        </section>
        <section className="border-b border-gray-700 pb-2">
          <h3 className="text-lg font-semibold">
            <Link
              to="/AdiconarProduto"
              className="text-white hover:text-indigo-500 transition-colors duration-200"
            >
              Adicionar Produto
            </Link>
          </h3>
        </section>
        <section className="border-b border-gray-700 pb-2">
          <h3 className="text-lg font-semibold">
            <Link
              to="/ListaProdutos"
              className="text-white hover:text-indigo-500 transition-colors duration-200"
            >
              Lista de Produtos
            </Link>
          </h3>
        </section>
      </nav>
    </aside>
  );
}
