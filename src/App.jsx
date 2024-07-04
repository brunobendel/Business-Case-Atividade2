import { Header } from "./componets/layout/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aside } from "./componets/layout/aside";
import { AdicionarProduto} from "./pages/AdicionarProduto";
import { ListaProdutos } from "./pages/ListaProduto";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AdiconarProduto" element={<AdicionarProduto />} />
            <Route path="/ListaProdutos" element={<ListaProdutos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
