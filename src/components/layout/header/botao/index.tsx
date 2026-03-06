import type { JSX } from 'react';
import './styles.css'

function Botao ({ texto, onClick, tipo = 'primario' }: { texto: string | JSX.Element, onClick: () => void, tipo?: 'primario' | 'secundario' | 'terciario' }) {
    return (
        <button onClick={onClick} className={`botao ${tipo}`}>{texto}</button>
    )
}

export default Botao;