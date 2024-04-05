import React from 'react';
import useGames from '../../services/rotas/Game';
import { useGameFilter } from '../../services/hooks/useSearch';
import SearchCard from '../../components/Search';
import { Game } from '../../services/types/Game';
import { CardTitleWrapper, Container, GameDetailsContainer, SeachInput } from './style';



const CardGames = () => {
    const games: Game[] = useGames();
    const { filteredGames, handleFilter } = useGameFilter(games);

    const reversedGames = [...filteredGames].reverse();

    return (
        <>
            <SeachInput>
                <h1 className="text-light">Pesquise Por ID</h1>
                <SearchCard handleFilter={handleFilter} />
            </SeachInput>
            <Container>
                {reversedGames.length === 0 ? (
                    <div className="text-center mt-3"> 
                        <h1 className="mb-0 pt-5 text-black">Crie algum jogo</h1>
                    </div>
                ) : (
                    reversedGames.map(game => (
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
                    ))
                )}
            </Container>
        </>
    );
};

export default CardGames;
