import hours from './hours.js';
import location from './location.js';

const home = () => {
    const body = document.createElement('div');
    body.className = 'body';
    
    const title = document.createElement('h1');
    title.textContent = 'Eat up!';
    body.appendChild(title);

    const mainImage = document.createElement('div');
    mainImage.className = 'main_image';
    mainImage.textContent = 'IMAGE GOES HERE';
    body.appendChild(mainImage);

    const message = document.createElement('div');
    message.textContent = 'Welcome to Eat Up!';
    body.appendChild(message);

    body.appendChild(hours());
    body.appendChild(location());

    return body;
}

export default home;