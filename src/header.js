import Icon from './icon.png';
import Banner from './banner.jpg'

const header = () => {
    const header = document.createElement('div');
    header.className = 'header';

    const topRow = document.createElement('div');
    topRow.classList.add('top_row');

    // const myIcon = new Image();
    // myIcon.src = Icon;
    // myIcon.id = 'header_icon';
    // topRow.appendChild(myIcon);

    const banner = new Image();
    banner.src = Banner;
    banner.id = 'banner';
    topRow.appendChild(banner);

    const navRow = document.createElement('div');
    navRow.classList.add('nav_row');

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.textContent = 'Home';
    navRow.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu';
    menuBtn.textContent = 'Menu';
    navRow.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.id = 'contact';
    contactBtn.textContent = 'Contact';
    navRow.appendChild(contactBtn);

    header.appendChild(topRow);
    header.appendChild(navRow);
    return header;
}

export default header;