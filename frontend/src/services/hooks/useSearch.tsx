import { useEffect, useState } from 'react';
import { Game } from '../types/game';


export const filterGamesById = (games: Game[], searchTerm: string): Game[] => {
    if (searchTerm.trim() === "") {
        return games;
    } else {
        const filtered = games.filter(game => game.id === parseInt(searchTerm)); 
        return filtered;
    }
};

export const useGameFilter = (initialGames: Game[]) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredGames(initialGames);
        } else {
            const filtered = filterGamesById(initialGames, searchTerm);
            setFilteredGames(filtered); 
        }
    }, [initialGames, searchTerm]);

    const handleFilter = (searchTerm: string) => {
        setSearchTerm(searchTerm); 
    };

    return { filteredGames, handleFilter };
};
