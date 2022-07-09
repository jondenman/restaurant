const menu = () => {
    const menu = document.createElement('div');
    menu.classList = 'body';

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'MENU';
    menu.appendChild(menuTitle);

    return menu;
}

export default menu