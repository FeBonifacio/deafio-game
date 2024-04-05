import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../types/Game';

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Game[]>('http://localhost:3000/');
                setGames(response.data);
                console.log('Jogos recebidos:', response.data);
            } catch (error) {
                console.error('Erro ao buscar os jogos:', error);
            }
        };

        fetchData();
    }, []);

    return games;
};

export default useGames;
