const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hey there',
    'Hola',
    'How are you',
    'You are so coool',
];

const types = ['info', 'success', 'error'];

const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
}

const getRandomType = () => {
    return types[Math.floor(Math.random() * types.length)];
}
const createNotification = (message, type) => {
    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : getRandomType());
    notify.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}

button.addEventListener('click', () => createNotification());