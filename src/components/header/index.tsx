import Botao from '../botao'
import './styles.css'

export default function Header() {
    return (
        <div className='header'>
            <Botao texto="Página Inicial" onClick={() => window.location.href = "/"} tipo='terciario' />
            <Botao texto="Livros" onClick={() => window.location.href = "/livros"} tipo='terciario' />
            <Botao texto="Leitores" onClick={() => window.location.href = "/leitores"} tipo='terciario' />
            <Botao texto="Sugerir Livros" onClick={() => window.location.href = "/sugerir-livros"} tipo='terciario' />
        </div>
    )
}