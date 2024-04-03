import styled from 'styled-components';

const ContainerDiv = styled.div`
    background-color: #000;
    color: white;
    width: 100%;

    .row {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 10px;
        width: 100%;
    }

    .col-btn {
        text-align: right;
    }

    .col-btn button {
        margin-right: 5px; 
    }
`;

const Header = () => {
    return (
        <ContainerDiv>
            <div className="row">
                <div className="col text-start">
                    <h1>GAMES</h1>
                </div>
                <div className="col-btn text-end">
                    <button className="btn btn-secondary">CRIAR</button>
                    <button className="btn btn-secondary">EDITAR / EXCLUIR</button>
                </div>
            </div>
        </ContainerDiv>
    );
};

export default Header;
