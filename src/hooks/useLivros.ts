import { useCallback, useEffect, useState} from 'react';
import type { Livro } from '../types/livro';

export function useLivros() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        fetch('/livros.json')
            .then((res) => res.json())
            .then((data) => setLivros(data))
            .catch((error) => console.error("Error loading livros", error));
    }, []);

    const getLivroById = useCallback((id: string) => {
        return livros.find((l) => l.id === Number(id));
    }, [livros]);

    return {
        livros,
        getLivroById
    }
}