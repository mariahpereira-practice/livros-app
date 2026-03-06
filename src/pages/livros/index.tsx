import { useMemo, useState } from 'react';
import { useLivros } from '../../hooks/useLivros';
import { CardLivroStyled } from './componentes/card-livro-styled';
import { Container, Titulo, ContainerBusca, ContainerSelect, ContainerFilter, SelectOrdenacao, InputFiltro, LivrosContainer } from './style';

export function Livros() {
  const { livros } = useLivros();
  const [ordenacao, setOrdenacao] = useState<'id' | 'titulo' | 'dataLeitura'>('id')
  const [filtroTitulo, setFiltroTitulo] = useState('')

  const listaOrdenada = useMemo(() => {
    const termo = filtroTitulo.trim().toLowerCase();
    const livrosFiltrados = termo
      ? livros.filter((livro) => livro.titulo.toLowerCase().includes(termo))
      : [...livros]

    if (ordenacao === 'titulo') {
      return livrosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo))
    }

    if (ordenacao === 'dataLeitura') {
      return livrosFiltrados.sort((a, b) => new Date(b.dataLeitura).getTime() - new Date(a.dataLeitura).getTime())
    }

    return livrosFiltrados.sort((a, b) => a.id - b.id)
  }, [livros, ordenacao, filtroTitulo]);

  return (
    <Container>
      <Titulo>Livros</Titulo>
      <ContainerBusca>
        <ContainerSelect>
          <span>Ordenar por:</span>
          <SelectOrdenacao
            value={ordenacao}
            onChange={(e) => {
              const valor = e.target.value as 'id' | 'titulo' | 'dataLeitura'
              setOrdenacao(valor)
            }}
          >
            <option value="id">Selecione...</option>
            <option value="titulo">Título</option>
            <option value="dataLeitura">Data de Leitura (Mais Recente)</option>
          </SelectOrdenacao>
        </ContainerSelect>
        <ContainerFilter>
          <span>Filtrar:</span>
          <InputFiltro
            type="text"
            placeholder='Digite o título do livro'
            value={filtroTitulo}
            onChange={(e) => setFiltroTitulo(e.target.value)}
          />
        </ContainerFilter>
      </ContainerBusca>
      
      <LivrosContainer>
        {listaOrdenada.map(livro => (
          <CardLivroStyled key={livro.id} livro={livro} />
        ))}
      </LivrosContainer>
    </Container>
  )
}