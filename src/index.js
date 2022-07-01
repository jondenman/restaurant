import home from './home.js';
import header from './header.js';
import menu from './menu.js';
import contact from './contact.js';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(header());
contentDiv.appendChild(home());

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

function homeOnClick (e) {
    clearContent();
    contentDiv.appendChild(home());
}

function menuOnClick (e) {
    clearContent();
    contentDiv.appendChild(menu());
}

function contactOnClick (e) {
    clearContent();
    contentDiv.appendChild(contact());
}

homeBtn.addEventListener('click', homeOnClick);
menuBtn.addEventListener('click', menuOnClick);
contactBtn.addEventListener('click', contactOnClick);

function clearContent () {
    const bodyDiv = document.querySelector('.body');
    contentDiv.removeChild(bodyDiv);

}

