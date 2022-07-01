const location = () => {
    const location = document.createElement('div');
    location.className = 'location';
    location.textContent = 'Location';

    const address = document.createElement('p');
    address.textContent = '123 Around Corner, City, State';

    location.appendChild(address);

    return location;
}

export default location;