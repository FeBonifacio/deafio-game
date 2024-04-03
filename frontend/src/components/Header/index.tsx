import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    background-color: #000;
    padding-top: 10px;
    color: white;
    border-radius: 3px;

    .row {
        display: flex;
        align-items: center;
        
    }

    .col-btn {
        margin-left: auto; /* Isso empurra os botões para a direita */
    }
`

const Header = () => {
    return (
        <ContainerDiv className="container">
            <div className="row">
                <div className="col text-start">
                    <h1>GAMES EM NOVIDADE</h1>
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
