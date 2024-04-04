import styled from 'styled-components';
import useCreateGame from '../../services/hooks/useCreate';
import { useFormValidation } from '../../utils/useFormValidation.js'; // Correção no import

const ContainerDiv = styled.div`
    padding: 20px;
`;

const CreateGamePage = () => {
    const { formData, handleChange, handleSubmit } = useCreateGame();
    
    useFormValidation(handleSubmit); 
    
    return (
        <ContainerDiv className="container">
            <h1 className="font-weight-bold" style={{ fontFamily: 'Roboto', fontSize: '3rem' }}>Criar Novo Jogo</h1>
            <form id="create-game-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" className="form-control" id="nome" name="nome" value={formData.nome} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição:</label>
                    <input className="form-control" id="descricao" name="descricao" style={{ resize: 'none' }}  value={formData.descricao} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="produtora" className="form-label">Produtora:</label>
                    <input type="text" className="form-control" id="produtora" name="produtora" value={formData.produtora} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ano" className="form-label">Ano:</label>
                    <input type="number" className="form-control" id="ano" name="ano" value={formData.ano} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idadeMinima" className="form-label">Idade Mínima:</label>
                    <input type="number" className="form-control" id="idadeMinima" name="idadeMinima" value={formData.idadeMinima} onChange={handleChange} />
                </div>
                <div className="container d-flex justify-content-center align-items-center" >
                    <button type="submit" className="btn btn-primary" style={{ width: '200px', height: '50px' }}>
                        Criar Jogo
                    </button>
                </div>
            </form>
        </ContainerDiv>
    );
};

export default CreateGamePage;
