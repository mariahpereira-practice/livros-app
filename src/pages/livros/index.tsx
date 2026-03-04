import { useMemo, useState } from 'react';
import { useLivros } from '../../hooks/useLivros';
import { CardLivro } from './componentes/card-livro';
import './styles.css'

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
    <main>
      <h1 className='titulo'>Livros</h1>
      <div className='container-busca'>
        <div className='container-select'>
          <span>Ordenar por:</span>
          <select
            className='select-ordenacao'
            value={ordenacao}
            onChange={(e) => {
              const valor = e.target.value as 'id' | 'titulo' | 'dataLeitura'
              setOrdenacao(valor)
            }}
          >
            <option value="id">Selecione...</option>
            <option value="titulo">Título</option>
            <option value="dataLeitura">Data de Leitura (Mais Recente)</option>
          </select>
        </div>
        <div className='container-filter'>
          <span>Filtrar:</span>
          <input
            className='input-filtro'
            type="text"
            placeholder='Digite o título do livro'
            value={filtroTitulo}
            onChange={(e) => setFiltroTitulo(e.target.value)}
          />
        </div>
      </div>
      
      <div className='livros-container'>
        {listaOrdenada.map(livro => (
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </div>
    </main>
  )
}