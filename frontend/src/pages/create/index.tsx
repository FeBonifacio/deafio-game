import React, { useState } from 'react';
import useCreateGame from '../../services/rotas/Create';
import { Alert } from 'react-bootstrap';
import { useFormValidation } from '../../utils/useFormValidation.js'; // Correção no import
import { ContainerDiv } from './style';

const CreateGamePage = () => {
    const { formData, handleChange, handleSubmit } = useCreateGame();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    useFormValidation(handleSubmit); 

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { success, error } = await handleSubmit(event);

        if (success) {
            setShowSuccessAlert(true);
            setShowErrorAlert(false);
        } else {
            setShowErrorAlert(true);
            setShowSuccessAlert(false);
            console.error('Erro ao criar o jogo:', error);
        }
    };
    
    return (
        <ContainerDiv className="container">
            {showSuccessAlert && (
                <Alert className="alert alert-primary" role="alert" onClose={() => setShowSuccessAlert(false)} dismissible>
                    <p>Game foi criado com sucesso!</p>
                </Alert>
            )}

            {showErrorAlert && (
                <Alert className="alert alert-danger" role="alert" onClose={() => setShowErrorAlert(false)} dismissible>
                    <p>Ocorreu um erro ao criar o jogo. Temos um limite de caracteres para a descrição</p>
                </Alert>
            )}

            <h1 className="text-light">Criar Novo Jogo</h1>
            <form id="create-game-form" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="text-light">Nome:</label>
                    <input type="text" className="form-control bg-transparent text-white" id="nome" name="nome" value={formData.nome} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="text-light">Descrição:</label>
                    <textarea className="form-control bg-transparent text-white" id="descricao" name="descricao" style={{ resize: 'none' }}  value={formData.descricao} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="produtora" className="text-light">Produtora:</label>
                    <input type="text" className="form-control bg-transparent text-white" id="produtora" name="produtora" value={formData.produtora} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ano" className="text-light">Ano:</label>
                    <input type="number" className="form-control bg-transparent text-white" id="ano" name="ano" value={formData.ano} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idadeMinima" className="text-light">Idade Mínima:</label>
                    <input type="number" className="form-control bg-transparent text-white" id="idadeMinima" name="idadeMinima" value={formData.idadeMinima} onChange={handleChange} />
                </div>
                <div className="container d-flex justify-content-center align-items-center" >
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '200px', height: '50px', paddingBottom: '5px'}}
                    >
                        Criar Jogo
                    </button>
                </div>
            </form>
        </ContainerDiv>
    );
};

export default CreateGamePage;
