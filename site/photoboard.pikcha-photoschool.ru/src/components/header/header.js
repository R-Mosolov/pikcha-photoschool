import React from 'react';

import './header.css';

const Header = () => {
    return(
        <header className="header">
            <nav className="navbar shadow-sm">
                <div className="container">
					<span className="navbar-brand mb-0 h1">
						ПИКЧА.Photoboard
					</span>
                </div>
            </nav>
        </header>
    )
};

export default Header;