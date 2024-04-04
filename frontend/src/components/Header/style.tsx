import styled from "styled-components";

export const ContainerDiv = styled.div`
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

    .btn {
        margin-left: 5px;
    }

    .btn-custom {
    background-color: #007bff; /* Azul profissional */
    color: #ffffff; /* Texto branco */
    border: none; /* Remove a borda */
    border-radius: 5px; /* Borda arredondada */
    padding: 8px 16px; /* Espaçamento interno */
    font-size: 16px; /* Tamanho da fonte */
}

    .btn-custom:hover {
        background-color: #0056b3; /* Altera a cor quando hover */
    }
`;