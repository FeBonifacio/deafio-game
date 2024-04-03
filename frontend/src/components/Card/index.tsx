import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CardGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/jogos`);
                setGames(response.data);
                console.log('Jogos recebidos:', response.data); // Adicione esta linha para verificar os jogos recebidos no console
            } catch (error) {
                console.error('Erro ao buscar os jogos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Renderize os jogos aqui */}
        </div>
    );
};

export default CardGames;
