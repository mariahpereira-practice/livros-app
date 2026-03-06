import ImagemCapa from './componentes/imagem-capa'
import { AppContent, TituloCapa, InfoLivro } from './style'

function Home() {

  return (
    <AppContent>
      <div>
        <TituloCapa>
          <h1>Clube do Livro Jane Chrispector, The Queen</h1>
          <p>Bem-vindo ao nosso clube do livro! Aqui você encontrará informações sobre os livros que estamos lendo e discutindo.</p>
          <InfoLivro>
              <h2>Sinopse do livro do mês - Fevereiro/2026: </h2>
              <p>A Vila dos Tecidos, de Anne Jacobs, é uma saga familiar ambientada em Augsburgo, 
          Alemanha, a partir de 1913, que acompanha Marie, uma órfã que trabalha como cozinheira na mansão da rica família Melzer, 
          dona de uma indústria têxtil, enquanto se apaixona pelo herdeiro Paul, enfrentando intrigas, disputas sociais e os conflitos 
          históricos da Alemanha pré-Primeira Guerra, explorando desigualdade e limites de classe.</p>
          </InfoLivro>
        </TituloCapa>
      </div>
      <ImagemCapa img="https://m.media-amazon.com/images/I/91TQximA69L._AC_UF1000,1000_QL80_.jpg" nome="A vila dos Tecidos"></ImagemCapa>
    </AppContent>
  )
}

export default Home
