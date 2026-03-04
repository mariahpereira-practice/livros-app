import './styles.css';

export default function ImagemCapa({ img, nome }: { img: string, nome: string }) {
    return (
        <div className='img-capa'>
            <img src={img} alt="Capa do livro do mês" />
             <div className='livro-mes'>
                <span>Livro do mês: </span>
                <span className='nome'>{nome}</span>
             </div>
        </div>
    );
}