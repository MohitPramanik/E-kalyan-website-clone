let blackBack = document.getElementById('blackBack')
let btns = document.querySelector('.btn');
let close = Array.from(document.querySelectorAll('.close'));
let wind = document.getElementById('choose-window');

btns.onclick = () => {
    blackBack.style.display = 'block';
    wind.style.display = 'flex';
}

close.forEach((closes) => {
    closes.onclick = () => {
        blackBack.style.display = 'none';
        wind.style.display = 'none';
    }
})

blackBack.onclick = () => {
    blackBack.style.display = 'none';
    wind.style.display = 'none';
}
