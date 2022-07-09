import home from './home.js';
import header from './header.js';
import menu from './menu.js';
import contact from './contact.js';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(header());
contentDiv.appendChild(home());

const homeBtn = document.getElementById('home');
homeBtn.classList.add('active');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

function homeOnClick (e) {
    clearContent();
    e.target.className = 'active';
    contentDiv.appendChild(home());
}

function menuOnClick (e) {
    clearContent();
    e.target.className = 'active';
    contentDiv.appendChild(menu());
}

function contactOnClick (e) {
    clearContent();
    e.target.className = 'active';
    contentDiv.appendChild(contact());
}

homeBtn.addEventListener('click', homeOnClick);
menuBtn.addEventListener('click', menuOnClick);
contactBtn.addEventListener('click', contactOnClick);

function clearContent () {
    const bodyDiv = document.querySelector('.body');
    let header = document.querySelector('.header');
    let headerButtons = header.querySelectorAll('button');

    headerButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    contentDiv.removeChild(bodyDiv);

}

