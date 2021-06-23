import React from 'react';
import Header from '../header/index_react.jsx'
import style from './style.css';

/*
const H1 = React.createElement(
    'h1',
    { className: style.appHeader },
    'Hello world!'
);
*/

const H1 = () => {
    return (
        <h1 className={style.appHeader}>
            Hello world!
        </h1>
    )
};

/*
const Page = React.createElement('div', null, Header, H1);
*/

const Page = () => {
    return (
        <div>
            <Header></Header>
            <H1></H1>
        </div>
    )
};

export default Page;
