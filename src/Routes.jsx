import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Sobremin } from "./pages/sobre-mim";
import { Menu } from "./components/menu";
import { Rodape } from "./components/rodape";
import { PaginaPadrao } from "./components/paginaPadrao";
import { Post } from "./pages/post";
import { NaoEncontrada } from "./pages/nãoEncontrada";
import ScrollToTop from "./components/scrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<Sobremin />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
