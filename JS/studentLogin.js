let button = document.querySelectorAll('button');
let icon = document.getElementById('icon')
let innertext = document.getElementById('mobile');

const toggle = () => {
    
}

button[0].onclick = () => {
    button[0].classList = 'active';
    button[1].classList = '';
    icon.classList = 'fa-solid fa-phone';
    innertext.placeholder = 'Mobile';
}

button[1].onclick = () => {
    button[0].classList = ''; 
    button[1].classList = 'active';
    icon.classList = 'fa-solid fa-envelope'
    innertext.placeholder = 'email';
}
