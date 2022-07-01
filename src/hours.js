const times = [
    'Mon: 9AM - 10PM',
    'Tues: 9AM - 10PM',
    'Wed: 9AM - 10PM',
    'Thurs: 9AM - 10PM',
    'Fri: 9AM - 10PM',
    'Sat: 9AM - 10PM',
    'Sun: 10AM - 6PM',
]

const hours = () => {
    const hours = document.createElement('div');
    hours.className = 'hours';
    hours.textContent = 'Hours';

    for (const time of times) {
        let timeDiv = document.createElement('p');
        timeDiv.textContent = time;
        hours.appendChild(timeDiv);
    }
    
    return hours;
}

export default hours;