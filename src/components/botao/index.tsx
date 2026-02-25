import './styles.css'

function Botao ({ texto, onClick, tipo = 'primario' }: { texto: string, onClick: () => void, tipo?: 'primario' | 'secundario' | 'terciario' }) {
    return (
        <button onClick={onClick} className={`botao ${tipo}`}>{texto}</button>
    )
}

export default Botao;