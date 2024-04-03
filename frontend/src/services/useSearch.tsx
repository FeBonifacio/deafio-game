import { Game } from "./useGame";

export const filterGamesById = (games: Game[], searchTerm: string): Game[] => {
    if (searchTerm.trim() === "") {
        return games; // Se o termo de pesquisa estiver vazio, retorna todos os jogos
    } else {
        const filtered = games.filter(game => game.id === parseInt(searchTerm)); // Filtra os jogos pelo ID
        return filtered;
    }
};