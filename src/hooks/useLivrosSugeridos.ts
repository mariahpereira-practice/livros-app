import { useCallback, useEffect, useState} from 'react';
import type { Livro } from '../types/livro';

export function useLivrosSugeridos() {
    const [livrosSugeridos, setLivrosSugeridos] = useState<Livro[]>([]);

    useEffect(() => {
        fetch('/livros-sugeridos.json')
            .then((res) => res.json())
            .then((data) => setLivrosSugeridos(data))
            .catch((error) => console.error("Error loading livros sugeridos", error));
    }, []);

    const saveLivroSugerido = useCallback(async (newLivro: Livro) => {
        try {
            // Simulando uma requisição POST para salvar o livro
            const response = await fetch('/api/livros-sugeridos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLivro)
            });
            
            if (!response.ok) {
                throw new Error('Erro ao salvar livro sugerido');
            }
            
            const updatedLivros = [...livrosSugeridos, newLivro];
            setLivrosSugeridos(updatedLivros);
            
            console.log('Livro sugerido salvo com sucesso:', newLivro);
        } catch (error) {
            console.error('Erro ao salvar livro:', error);
            // Por enquanto, apenas atualiza o estado local
            const updatedLivros = [...livrosSugeridos, newLivro];
            setLivrosSugeridos(updatedLivros);
        }
    }, [livrosSugeridos]);

    return {
        livrosSugeridos,
        saveLivroSugerido
    }
}
