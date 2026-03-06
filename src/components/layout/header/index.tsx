import Botao from './botao'
import { ThemeToggle } from '../../theme-toggle'
import './styles.css'
import bookIcon from '../../../assets/book-solid.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-top'>
                <Botao 
                    texto={
                        <div className='logo-container'>
                            <img className='book-icon' src={bookIcon} alt="Book Logo" />
                            Clube do Livro
                        </div>
                    } 
                    tipo='primario' 
                    onClick={() => window.location.href = "/"} 
                />
                <ThemeToggle />  
            </div>
            <Botao texto="Livros" onClick={() => window.location.href = "/livros"} tipo='terciario' />
            <Botao texto="Sugerir Livros" onClick={() => window.location.href = "/sugerir-livros"} tipo='terciario' />
        </div>
    )
}