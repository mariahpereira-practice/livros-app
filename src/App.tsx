import './App.css'
import { useEffect, useState } from 'react'
import Home from './pages/home'
import Botao from './components/botao'
import { Livros } from './pages/livros'
import { Leitores } from './pages/leitores'
import Header from './components/header'
import Footer from './components/footer'
import { SugerirLivros } from './pages/sugerir-livros'

function App() {
  const [path, setPath] = useState(globalThis.location.pathname)

  useEffect(() => {
  const handlePopState = () => setPath(globalThis.location.pathname)

    globalThis.addEventListener('popstate', handlePopState)
    return () => globalThis.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <>
    <div className="app-shell">
    <Header></Header>
    {renderPage(path)}
    </div>
    <Footer></Footer>
    </>
  )
}
function renderPage(path: string) {

  if (path === '/' || path === '/home') {
    return <Home />
  }

  if (path === '/livros') {
    return <Livros />
  }

  if (path === '/leitores') {
    return <Leitores />
  }

  if (path === '/sugerir-livros') {
    return <SugerirLivros />
  }

  return (
    <main className="pagina-nao-encontrada">
      <h1>Página não encontrada</h1>
      <span>Volte para a página inicial.</span>
      <Botao texto="Voltar" onClick={() => globalThis.location.href = "/"} tipo='primario' />
    </main>
  )
}

export default App
