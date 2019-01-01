import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (

        <Menu width= {'200px'} noOverlay>
        <a className="menu-item" href="/">
            Home
        </a>
        <a className="menu-item" href="#typography">
            Typografi
        </a>
        <a className="menu-item" href="#colors">
            Färger
        </a>
        <a className="menu-item" href="#buttons">
            Knappar
        </a>
        <a className="menu-item" href="#forms">
            Formulär
        </a>
    </Menu>
    );
}