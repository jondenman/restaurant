const header = () => {
    const header = document.createElement('div');
    header.className = 'header';

    const homeBtn = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.textContent = 'Home';
    header.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu';
    menuBtn.textContent = 'Menu';
    header.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.id = 'contact';
    contactBtn.textContent = 'Contact';
    header.appendChild(contactBtn);

    return header;
}

export default header;