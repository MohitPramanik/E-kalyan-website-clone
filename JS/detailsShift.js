let button = document.querySelectorAll('.info-buttons')
let content = document.querySelectorAll('.details')

button[0].onclick = () => {
    button[0].classList = 'info-buttons active';
    button[1].classList = 'info-buttons';
    content[0].classList = 'details'
    content[1].classList = 'details hidden'
}

button[1].onclick = () => {
    button[1].classList = 'info-buttons active';
    button[0].classList = 'info-buttons';
    content[0].classList = 'details hidden'
    content[1].classList = 'details'
}