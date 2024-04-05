import styled from "styled-components";

export const Container = styled.div`
    min-height: 68vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .card-body {
        height: 300px;
    }
`;

export const GameDetailsContainer = styled.div`
    width: calc(33.33% - 20px);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 906px) {
        width: calc(50% - 20px);
    }

    @media (max-width: 425px) {
        width: calc(100% - 20px);
    }
`;

export const CardTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const SeachInput = styled.div`
    width: 50%;
    margin: 10px;
    
    @media (max-width: 500px) {
        width: 50%;
        text-align: center;

        h1 {
            font-size: 20px;
        }
    }
`;