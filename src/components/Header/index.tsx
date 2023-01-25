import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from './style';

const Header = () => {
    return (
        <HeaderStyle>
            <Link to="/">
                <img
                    src="./Faks_log_blue.svg"
                    alt="Logo Faks"
                />
            </Link>
            <nav>
                <ul>
                    <Link to="/newClaim">
                        <li>Créer une réclamation</li>
                    </Link>
                    <Link to="/info">
                        <li>Infos</li>
                    </Link>
                </ul>
            </nav>
        </HeaderStyle>
    );
};

export default Header;