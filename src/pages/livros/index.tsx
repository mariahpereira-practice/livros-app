import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import { CardLivro } from '../../components/card-livro';
import './styles.css'

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  dataLeitura: Date;
  linkImagem?: string;
}

export function Livros() {
  const [ordenacao, setOrdenacao] = useState<'id' | 'titulo' | 'dataLeitura'>('id')
  const [filtroTitulo, setFiltroTitulo] = useState('')

  const [listaLivros] = useState<Livro[]>([
    {
      id: 1,
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      anoPublicacao: 1954,
      dataLeitura: new Date('2025-12-14'),
      linkImagem: 'https://m.media-amazon.com/images/I/61N4u6ijSeL._AC_UL320_.jpg',
    },
    {
      id: 2,
      titulo: 'O sonho de uma Apaixonada por Livros',
      autor: 'Miya Kazuki',
      anoPublicacao: 2026,
      dataLeitura: new Date('2026-01-14'),
      linkImagem: 'https://m.media-amazon.com/images/I/517q5v9Uh4L._SY445_SX342_ML2_.jpg',
    },
    {
      id: 3,
      titulo: 'Katabasis',
      autor: 'R.F.Kuang',
      anoPublicacao: 2025,
      dataLeitura: new Date('2026-02-14'),
      linkImagem: 'https://m.media-amazon.com/images/I/916c3LpFtkL._SY466_.jpg',
    },
    {
      id: 4,
      titulo: 'A vila dos Tecidos',
      autor: 'Anne Jacobs',
      anoPublicacao: 2002,
      dataLeitura: new Date('2026-03-14'),
      linkImagem: 'https://m.media-amazon.com/images/I/91TQximA69L._AC_UF1000,1000_QL80_.jpg',
    }
  ]);

  const listaOrdenada = useMemo(() => {
    const termo = filtroTitulo.trim().toLowerCase();
    const livrosFiltrados = termo
      ? listaLivros.filter((livro) => livro.titulo.toLowerCase().includes(termo))
      : [...listaLivros]

    if (ordenacao === 'titulo') {
      return livrosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo))
    }

    if (ordenacao === 'dataLeitura') {
      return livrosFiltrados.sort((a, b) => b.dataLeitura.getTime() - a.dataLeitura.getTime())
    }

    return livrosFiltrados.sort((a, b) => a.id - b.id)
  }, [listaLivros, ordenacao, filtroTitulo]);

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
            <option value="id"></option>
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