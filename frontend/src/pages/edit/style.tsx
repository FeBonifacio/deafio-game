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
        margin-bottom: 10px;
    }

    .buttons-container button {
        margin-right: 5px; 
    }

    .details-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        margin-bottom: 10px;
    }

    .details-wrapper .card-title {
        margin-right: 10px; 
    }

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;