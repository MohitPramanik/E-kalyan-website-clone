let increase = document.getElementById('size-increase');
let decrease = document.getElementById('size-decrease');
let normal = document.getElementById('normal-size');
let recolor = document.getElementById('recolor')
let blackAndWhite = document.getElementById('grey-maker');
let body = document.body;
let bars = document.getElementById('hamburger');
let nav = document.getElementsByTagName('nav')[0];
let ul = document.getElementById('button-ul');
let textSize = document.getElementsByTagName('body')[0].style.fontSize;
let clickNo = 0;
let animeClick = 0;

const increaseSize = () => {
    if (clickNo == 0) {
        body.style.fontSize = '20px';
        clickNo++;
    }
    else if (clickNo == 1) {
        body.style.fontSize = '22px';
        clickNo++;
    }
    else if (clickNo == 2) {
        body.style.fontSize = '24px';
        clickNo++;
    }
    else if (clickNo == 3) {
        body.style.fontSize = '26px';
        clickNo++;
    }
}

const decreaseSize = () => {
    if (clickNo == 4) {
        body.style.fontSize = '24px';
        clickNo--;
    }
    else if (clickNo == 3) {
        body.style.fontSize = '22px';
        clickNo--;
    }
    else if (clickNo == 2) {
        body.style.fontSize = '20px';
        clickNo--;
    }
    else if (clickNo == 1) {
        body.style.fontSize = '18px';
        clickNo--;
    }
    else if(clickNo == 0){
        body.style.fontSize = '14px';
    }
}

increase.onclick = () => {
    increaseSize();
}

decrease.onclick = () => {
    decreaseSize();
}

normal.onclick = () => {
    body.style.fontSize = '16px';
}

bars.onclick = () => {
    if(animeClick == 0) {
        nav.style.animationName = 'nav-show';
        animeClick = 1;
    }
    else  {
        nav.style.animationName = 'nav-hide';
        animeClick = 0;
    }
    ul.classList.toggle('hide');
}