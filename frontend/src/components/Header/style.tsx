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

    .col-btn {
        text-align: right;
    }

    .col-btn button {
        margin-right: 5px; 
    }
`;