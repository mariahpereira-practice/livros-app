import { useState } from "react";
import './styles.css';

interface FormData {
    nomeLivro: string;
    autor: string;
    genero: string;
    anoPublicacao: string;
    sinopse: string;
    linkImagem: string;
}

interface FormState {
    values: FormData;
    errors: Partial<FormData>;
}

export function SugerirLivros() {
    const [form, setForm] = useState<FormState>({
        values: {
            nomeLivro: '',
            autor: '',
            genero: '',
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

    const handleSubmit = (event: React.SubmitEvent) => {
        event.preventDefault();
        const { errors, values } = form;
        const hasErrors = Object.values(errors).some((error) => error !== undefined);
        const hasEmptyFields = Object.values(values).some((value) => value === '');
        
        if (hasEmptyFields) {
            alert('Por favor, preencha todos os campos antes de enviar o formulário.');
            return;
        }
        
        if (hasErrors) {
            alert('Por favor, corrija os erros antes de enviar o formulário.');
            return;
        }
        
        console.log('Formulário enviado com sucesso:', form.values);
        setForm({
            values: {
                nomeLivro: '',
                autor: '',
                genero: '',
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
            case 'genero': 
                if( value.length > 0 && value.length < 3) {
                    return 'O gênero deve conter pelo menos 3 caracteres';
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
        <main className="sugerir-livros-container">
            <h2 className="title">Sugestão de Livros</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="nomeLivro" className="label-input">Nome do Livro:</label>
                    <input 
                        type="text" 
                        id="nomeLivro" 
                        name="nomeLivro"
                        value={form.values.nomeLivro}
                        onChange={handleChange}
                        className={`input-text 
                            ${form.errors.nomeLivro ? 'input-error' : ''}`}
                    />
                    {form.errors.nomeLivro && <span className="error-message">{form.errors.nomeLivro}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="autor" className="label-input">Autor:</label>
                    <input 
                        type="text" 
                        id="autor" 
                        name="autor"
                        value={form.values.autor}
                        onChange={handleChange}
                        className={`input-text 
                            ${form.errors.autor ? 'input-error' : ''}`}
                    />
                    {form.errors.autor && <span className="error-message">{form.errors.autor}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="genero" className="label-input">Gênero:</label>
                    <input 
                        type="text" 
                        id="genero" 
                        name="genero"
                        value={form.values.genero}
                        onChange={handleChange}
                        className={`input-text 
                            ${form.errors.genero ? 'input-error' : ''}`}
                    />
                    {form.errors.genero && <span className="error-message">{form.errors.genero}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="anoPublicacao" className="label-input">Ano de Publicação:</label>
                    <input 
                        type="text" 
                        id="anoPublicacao" 
                        name="anoPublicacao"
                        value={form.values.anoPublicacao}
                        onChange={handleChange}
                        className={`input-text 
                            ${form.errors.anoPublicacao ? 'input-error' : ''}`}
                    />
                    {form.errors.anoPublicacao && <span className="error-message">{form.errors.anoPublicacao}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="sinopse" className="label-input">Sinopse:</label>
                    <input 
                        type="text" 
                        id="sinopse" 
                        name="sinopse"
                        value={form.values.sinopse}
                        onChange={handleChange}
                        className={`input-text 
                            ${form.errors.sinopse ? 'input-error' : ''}`}
                    />
                    {form.errors.sinopse && <span className="error-message">{form.errors.sinopse}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="linkImagem" className="label-input">Link da Imagem:</label>
                    <input 
                        type="text" 
                        id="linkImagem" 
                        name="linkImagem"
                        value={form.values.linkImagem}
                        onChange={handleChange}
                        className={`input-text 
                            ${form.errors.linkImagem ? 'input-error' : ''}`}
                    />
                    {form.errors.linkImagem && <span className="error-message">{form.errors.linkImagem}</span>}
                </div>
                <button type="submit" className="submit-btn">Sugerir</button>
            </form>
        </main>
    )
}