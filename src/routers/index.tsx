import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import Home from "../pages/home";
import { Livros } from "../pages/livros";
import { Leitores } from "../pages/leitores";
import { SugerirLivros } from "../pages/sugerir-livros";
import Botao from "../components/botao";

function Routers() {
    return (<BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="livros" element={<Livros />} />
                <Route path="livros/:id" element={<Livros />} />
                <Route path="leitores" element={<Leitores />} />
                <Route path="sugerir-livros" element={<SugerirLivros />} />
                <Route path="*" element={<main className="pagina-nao-encontrada">
                                            <h1>Página não encontrada</h1>
                                            <span>Volte para a página inicial.</span>
                                            <Botao texto="Voltar" onClick={() => globalThis.location.href = "/"} tipo='primario' />
                                            </main>} />
            </Route>
        </Routes>
    </BrowserRouter>);
}

export default Routers;
