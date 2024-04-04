import { Link } from 'react-router-dom';
import { ContainerDiv } from './style';
import { ControllerIcon } from '../../utils/icons/controller';



const Header = () => {
    return (
        <ContainerDiv>
            <div className="row">
                <div className="col text-start">
                    <Link to="/">
                        <ControllerIcon />
                    </Link>
                </div>
                <div className="col-btn text-end">
                <Link to="/create">
                    <button className="btn btn-custom">CRIAR</button>
                </Link>
                <Link to="/edit">
                    <button className="btn btn-custom">EDITAR / EXCLUIR</button>
                </Link>
                </div>
            </div>
        </ContainerDiv>
    );
};

export default Header;
