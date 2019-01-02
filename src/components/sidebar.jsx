import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (

        <Menu width= {'200px'} noOverlay>
        <a className="menu-item" href="/">
            Home
        </a>
        <hr />
        <a className="menu-item" href="/style">Styleguide</a>
        <hr className='line-margin' />
        <a className="menu-item" href="/style/#typography">
            Typografi
        </a>
        <a className="menu-item" href="/style/#colors">
            Färger
        </a>
        <a className="menu-item" href="/style/#buttons">
            Knappar
        </a>
        <a className="menu-item" href="/style/#forms">
            Formulär
        </a>
        <hr />
        <a className="menu-item" href="/admin">Admin Styleguide</a>
        <hr />
        <a className="menu-item" href="/admin/#typography">
            Typografi
        </a>
        <a className="menu-item" href="/admin/#colors">
            Färger
        </a>
        <a className="menu-item" href="/admin/#buttons">
            Knappar
        </a>
        <a className="menu-item" href="/admin/#forms">
            Formulär
        </a>
    </Menu>
    );
}