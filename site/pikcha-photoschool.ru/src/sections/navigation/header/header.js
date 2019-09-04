import React from 'react';

import './header.css';
import Logo from './logo.png';

const Header = () => {
    return (
        <header className="header clearfix">
            <nav className="layout-positioner">
                <div className="header-left">
                    <img src={Logo} alt="Логотип ПИКЧИ" width={306} height={50}/>
                </div>
                <div className="header-right">
                    <button className="button-open" type="button" name="header-right-button"
                            id="header-right-button">Подробнее
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;