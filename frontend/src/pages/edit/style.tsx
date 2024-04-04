import styled from "styled-components";

export const SeachInput = styled.div`
    width: 50%;
    margin: 10px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const GameDetailsContainer = styled.div`
    width: 450px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    
    .buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .buttons-container button {
        margin-right: 5px; 
    }

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;