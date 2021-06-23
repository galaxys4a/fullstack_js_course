import header from '../header';
import style from './style.css'

const wrapper = document.createElement('div');

const h1 = document.createElement('h1');
h1.classList.add(style.appHeader);
const headerText = document.createTextNode('Hello world!');
h1.append(headerText);

wrapper.append(header, h1);

export default wrapper;
