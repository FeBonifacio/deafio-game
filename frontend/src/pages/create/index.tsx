import React, { useState } from 'react';
import useCreateGame from '../../services/rotas/Create';
import { Alert } from 'react-bootstrap';
import { useFormValidation } from '../../utils/useFormValidation.js'; // Correção no import
import { ContainerDiv } from './style';

const CreateGamePage = () => {
    const { formData, handleChange, handleSubmit } = useCreateGame();
    const [show, setShow] = useState(false);

    useFormValidation(handleSubmit); 

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await handleSubmit(event);
            setShow(true);
        } catch (error) {
            console.error('Erro ao criar o jogo:', error);
        }
    };
    
    return (
        <ContainerDiv className="container">
            {show && (
                <Alert className="alert alert-primary" role="alert" onClose={() => setShow(false)} dismissible>
                    <p>Game foi criado com sucesso!</p>
                </Alert>
            )}
            <h1 className="text-secondary">Criar Novo Jogo</h1>
            <form id="create-game-form" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="text-secondary">Nome:</label>
                    <input type="text" className="form-control bg-transparent text-white" id="nome" name="nome" value={formData.nome} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="text-secondary">Descrição:</label>
                    <input className="form-control bg-transparent text-white" id="descricao" name="descricao" style={{ resize: 'none' }}  value={formData.descricao} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="produtora" className="text-secondary">Produtora:</label>
                    <input type="text" className="form-control bg-transparent text-white" id="produtora" name="produtora" value={formData.produtora} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ano" className="text-secondary">Ano:</label>
                    <input type="number" className="form-control bg-transparent text-white" id="ano" name="ano" value={formData.ano} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idadeMinima" className="text-secondary">Idade Mínima:</label>
                    <input type="number" className="form-control bg-transparent text-white" id="idadeMinima" name="idadeMinima" value={formData.idadeMinima} onChange={handleChange} />
                </div>
                <div className="container d-flex justify-content-center align-items-center" >
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '200px', height: '50px' }}
                    >
                        Criar Jogo
                    </button>
                </div>
            </form>
        </ContainerDiv>
    );
};

export default CreateGamePage;
