import { Link } from 'react-router-dom';
import { ContainerDiv } from './style';



const Header = () => {
    return (
        <ContainerDiv>
            <div className="row">
                <div className="col text-start">
                    <Link to="/">
                        <h1>GAMES</h1>
                    </Link>
                </div>
                <div className="col-btn text-end">
                <Link to="/create">
                    <button className="btn btn-secondary">CRIAR</button>
                </Link>
                <Link to="/edit">
                    <button className="btn btn-secondary">EDITAR / EXCLUIR</button>
                </Link>
                </div>
            </div>
        </ContainerDiv>
    );
};

export default Header;
