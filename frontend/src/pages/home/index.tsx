import styled from 'styled-components';
import useGames from '../../services/hooks/useGame';
import { useGameFilter  } from '../../services/hooks/useSearch';
import SearchCard from '../../components/Search';
import { Game } from '../../services/types/game';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
`;

const GameDetailsContainer = styled.div`
    width: calc(33.33% - 20px);
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

    const { filteredGames, handleFilter } = useGameFilter(games);

    return (
        <>
            <SeachInput>
                <h1>Pesquise Por ID</h1>
                <SearchCard handleFilter={handleFilter} /> 
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
