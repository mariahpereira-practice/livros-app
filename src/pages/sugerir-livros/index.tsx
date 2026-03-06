import { useState } from "react";
import { useLivrosSugeridos } from "../../hooks/useLivrosSugeridos";
import { UseCategorias } from "../../hooks/useCategorias";
import type { Category } from "../../types/livro";
import { 
    SugerirLivrosContainer, 
    Title, 
    FormContainer, 
    InputGroup, 
    LabelInput, 
    InputText, 
    SelectInput, 
    ErrorMessage, 
    SubmitBtn 
} from './style';

interface FormData {
    nomeLivro: string;
    autor: string;
    categoria: number;
    anoPublicacao: string;
    sinopse: string;
    linkImagem: string;
}

interface FormErrors {
    nomeLivro?: string;
    autor?: string;
    categoria?: string;
    anoPublicacao?: string;
    sinopse?: string;
    linkImagem?: string;
}

interface FormState {
    values: FormData;
    errors: FormErrors;
}

export function SugerirLivros() {
    const { saveLivroSugerido } = useLivrosSugeridos();
    const categorias = UseCategorias();
    
    const [form, setForm] = useState<FormState>({
        values: {
            nomeLivro: '',
            autor: '',
            categoria: 0,
            anoPublicacao: '',
            sinopse: '',
            linkImagem: ''
        },
        errors: {}
    });

    const handleChange = ({ target: {name, value} }: React.ChangeEvent<HTMLInputElement>) => {
        const messageError = validateField(name, value);
        
        setForm((prevForm) => ({
            ...prevForm,
            values: {
                ...prevForm.values,
                [name]: value
            },
            errors: {
                ...prevForm.errors,
                [name]: messageError
            }
        }));
    };

    const handleChangeCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = Number(e.target.value);
        
        const messageErrorCategoria: string | undefined = selectedId === 0 ? 'Categoria é obrigatória' : undefined;

        setForm((prevForm) => ({
            ...prevForm,
            values: {
                ...prevForm.values,
                categoria: selectedId
            },
            errors: {
                ...prevForm.errors,
                categoria: messageErrorCategoria
            }
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { errors, values } = form;
        const hasErrors = Object.values(errors).some((error) => error !== undefined);
        const hasEmptyFields = values.nomeLivro === '' || 
                               values.autor === '' || 
                               values.categoria === 0 || 
                               values.anoPublicacao === '' || 
                               values.sinopse === '' || 
                               values.linkImagem === '';
        
        if (hasEmptyFields) {
            alert('Por favor, preencha todos os campos antes de enviar o formulário.');
            return;
        }
        
        if (hasErrors) {
            alert('Por favor, corrija os erros antes de enviar o formulário.');
            return;
        }
        
        const novoLivro = {
            id: Date.now(),
            titulo: values.nomeLivro,
            autor: values.autor,
            anoPublicacao: Number(values.anoPublicacao),
            dataLeitura: new Date().toISOString(),
            linkImagem: values.linkImagem,
            categoria: values.categoria
        };

        saveLivroSugerido(novoLivro);
        alert('Livro sugerido com sucesso!');
        
        setForm({
            values: {
                nomeLivro: '',
                autor: '',
                categoria: 0,
                anoPublicacao: '',
                sinopse: '',
                linkImagem: ''
            },
            errors: {}
        });
    };

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'nomeLivro': 
            if( value.length > 0 && value.length < 3) {
                return 'O nome do livro deve conter pelo menos 3 caracteres';
            }
            return undefined;
            case 'autor': 
                if( value.length > 0 && value.length < 3) {
                    return 'O nome do autor deve conter pelo menos 3 caracteres';
                }
                return undefined;
            case 'categoria':
                if( !value) {
                    return 'Por favor, selecione uma categoria';
                }
                return undefined;
            case 'anoPublicacao': 
                if( value.length > 0 && !/^\d{4}$/.test(value)) {
                    return 'Ano de publicação inválido';
                }
                return undefined;
            case 'sinopse': 
                if( value.length > 0 && value.length < 10) {
                    return 'A sinopse deve conter pelo menos 10 caracteres';
                }
                return undefined;
            case 'linkImagem': 
                if( value.length > 0 && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(value)) {
                    return 'Link de imagem inválido';
                }
                return undefined;
            default:
                return undefined;   
        }
    };

    return (
        <SugerirLivrosContainer>
            <Title>Sugestão de Livros</Title>
            <FormContainer onSubmit={handleSubmit}>
                <InputGroup>
                    <LabelInput htmlFor="nomeLivro">Nome do Livro:</LabelInput>
                    <InputText 
                        type="text" 
                        id="nomeLivro" 
                        name="nomeLivro"
                        value={form.values.nomeLivro}
                        onChange={handleChange}
                        hasError={!!form.errors.nomeLivro}
                    />
                    {form.errors.nomeLivro && <ErrorMessage>{form.errors.nomeLivro}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <LabelInput htmlFor="autor">Autor:</LabelInput>
                    <InputText 
                        type="text" 
                        id="autor" 
                        name="autor"
                        value={form.values.autor}
                        onChange={handleChange}
                        hasError={!!form.errors.autor}
                    />
                    {form.errors.autor && <ErrorMessage>{form.errors.autor}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <LabelInput htmlFor="categoria">Categoria:</LabelInput>
                    <SelectInput
                        id="categoria" 
                        name="categoria"
                        value={form.values.categoria}
                        onChange={handleChangeCategoria}
                        hasError={!!form.errors.categoria}
                    >
                        <option value={0}>Selecione uma categoria</option>
                        {categorias.map((categoria: Category) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.titulo}
                            </option>
                        ))}
                    </SelectInput>
                    {form.errors.categoria && <ErrorMessage>{form.errors.categoria}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <LabelInput htmlFor="anoPublicacao">Ano de Publicação:</LabelInput>
                    <InputText 
                        type="text" 
                        id="anoPublicacao" 
                        name="anoPublicacao"
                        value={form.values.anoPublicacao}
                        onChange={handleChange}
                        hasError={!!form.errors.anoPublicacao}
                    />
                    {form.errors.anoPublicacao && <ErrorMessage>{form.errors.anoPublicacao}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <LabelInput htmlFor="sinopse">Sinopse:</LabelInput>
                    <InputText 
                        type="text" 
                        id="sinopse" 
                        name="sinopse"
                        value={form.values.sinopse}
                        onChange={handleChange}
                        hasError={!!form.errors.sinopse}
                    />
                    {form.errors.sinopse && <ErrorMessage>{form.errors.sinopse}</ErrorMessage>}
                </InputGroup>
                <InputGroup>
                    <LabelInput htmlFor="linkImagem">Link da Imagem:</LabelInput>
                    <InputText 
                        type="text" 
                        id="linkImagem" 
                        name="linkImagem"
                        value={form.values.linkImagem}
                        onChange={handleChange}
                        hasError={!!form.errors.linkImagem}
                    />
                    {form.errors.linkImagem && <ErrorMessage>{form.errors.linkImagem}</ErrorMessage>}
                </InputGroup>
                <SubmitBtn type="submit">Sugerir</SubmitBtn>
            </FormContainer>
        </SugerirLivrosContainer>
    )
}