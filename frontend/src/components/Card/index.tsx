import styled from 'styled-components';
import useGames, { Game } from '../../services/useGame';
import SearchCard from '../Search';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Alterado para 'flex-start' para alinhar os elementos no topo */
    flex-wrap: wrap; /* Adicionado para que os elementos possam quebrar para a próxima linha */
    gap: 20px; /* Adicionando espaçamento entre os elementos */
    padding: 20px; /* Aumentando o espaçamento interno */
`;

const GameDetailsContainer = styled.div`
    width: calc(33.33% - 20px); /* Calcula o tamanho de cada elemento para que haja três elementos por linha */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const SeachInput = styled.div`
    width: 50%;
    margin: 10px;
`;

const CardGames = () => {
    const games: Game[] = useGames();

    const [filteredGames, setFilteredGames] = useState<Game[]>(games); // Estado para armazenar os jogos filtrados

    const handleFilter = (searchTerm: string) => {
        if (searchTerm.trim() === "") {
            setFilteredGames(games); // Se o termo de pesquisa estiver vazio, exibir todos os jogos
        } else {
            const filtered = games.filter(game => game.id === parseInt(searchTerm)); // Filtrar jogos pelo ID
            setFilteredGames(filtered);
        }
    };

    return (
        <>
            <SeachInput>
                <h1>Pesquise Por ID</h1>
                <SearchCard  handleFilter={handleFilter} /> 
            </SeachInput>
            <Container>
                {filteredGames.map(game => (
                    <GameDetailsContainer key={game.id}>
                        <div className="card">
                            <div className="card-body">
                                <CardTitleWrapper>
                                    <h3 className="card-title">{game.nome}</h3>
                                    <h5 className="card-title">{game.id}</h5>
                                </CardTitleWrapper>
                                <p className="card-text">{game.descricao}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Produtora: {game.produtora}</li>
                                    <li className="list-group-item">Ano: {game.ano}</li>
                                    <li className="list-group-item">Idade Mínima: {game.idadeMinima}</li>
                                </ul>
                            </div>
                        </div>
                    </GameDetailsContainer>
                ))}
            </Container>
        </>
    );
};

export default CardGames;
