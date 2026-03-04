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
        const updatedLivros = [...livrosSugeridos, newLivro];
        setLivrosSugeridos(updatedLivros);
        
        console.log('Livro sugerido (precisa de backend para salvar no JSON):', newLivro);
    }, [livrosSugeridos]);

    return {
        livrosSugeridos,
        saveLivroSugerido
    }
}
