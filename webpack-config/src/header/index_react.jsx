import React from 'react';
import pkg from '../../package.json';
import style from './style.css';

/*
const Header = React.createElement(
    'header',
    { className: style.appHeader, children: `App version: ${pkg.version}` }
);
*/

const Header = () => {
    return (
        <header className={style.appHeader}>
            App version: {pkg.version}
        </header>
    )
};

export default Header;
