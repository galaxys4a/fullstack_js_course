import pkg from '../../package.json';
import style from './style.css'

const header = document.createElement('header');

//header.classList.add(style['app-header']);

// exportLocalsConvention: "camelCase"
header.classList.add(style.appHeader);
header.append(`App version: ${pkg.version}`);

export default header;
