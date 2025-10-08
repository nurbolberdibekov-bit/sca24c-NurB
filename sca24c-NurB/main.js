const g = document.getElementById('greeting');
const btn = document.getElementById('askName');

function showGreeting(name) {
    g.textContent = name 
        ? `Hello, ${name}!`
        : 'Welcome!';
}

function askName() {
    const name = prompt('What is your name?');
    if (name) {
        localStorage.setItem('visitorName', name);
    } else {
        localStorage.removeItem('visitorName');
    }
    showGreeting(localStorage.getItem('visitorName'));
}

btn.addEventListener('click', askName);

showGreeting(localStorage.getItem('visitorName'));