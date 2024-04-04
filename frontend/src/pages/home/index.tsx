import styled from 'styled-components';
import useGames from '../../services/rotas/Game';
import { useGameFilter  } from '../../services/hooks/useSearch';
import SearchCard from '../../components/Search';
import { Game } from '../../services/types/game';
import { CardTitleWrapper, Container, GameDetailsContainer, SeachInput } from './style';


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
