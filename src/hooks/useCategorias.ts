import { useEffect, useState } from "react";
import type { Category } from "../types/livro";

export function UseCategorias() {
    const [categorias, setCategorias] = useState<Category[]>([]);

    useEffect(() => {
            fetch('/categorias.json')
                .then((res) => res.json())
                .then((data) => setCategorias(data))
                .catch((error) => console.error("Error loading categorias", error));
        }, []);

    return categorias;
}