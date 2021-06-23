import React from 'react';
import Header from '../header/index_react.js';
import style from './style.css';

const H1 = React.createElement(
    'h1',
    { className: style.appHeader },
    'Hello world!'
);

const Page = React.createElement('div', null, Header, H1);

export default Page;
