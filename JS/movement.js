let news = document.getElementById('news-ul')
let backward = document.getElementById('move-back')
let plays = document.getElementById('play-pause')
let forward = document.getElementById('move-forward')
let switcher = 0;

// const moveForward = () => {
//     news.style.right += "10%";
// }

// const moveBackward = () => {
//     news.style.right -= "10%";
// }

// for play-pause button
plays.onclick = () => {
    news.style.animationName = 'move';


    if (switcher == 0) {
        news.style.animationPlayState = 'paused';
        plays.classList = 'fa-solid fa-play';
        switcher = 1;
    }
    else {
        news.style.animationPlayState = 'running';
        plays.classList = 'fa-solid fa-pause';
        switcher = 0;
    }
}



// for forward move button
backward.onclick = () => {
    news.style.animationName = 'back';
    plays.classList = 'fa-solid fa-play';
    news.style.animationPlayState = 'paused';
    switcher = 1;
    // moveBackward();
    // console.log(currentPosition)
}

// for backward move button
forward.onclick = () => {
    news.style.animationName = 'forward';
    let pos = (news.offsetLeft)/document.getElementById('news-all').offsetWidth
    plays.classList = 'fa-solid fa-play';
    news.style.animationPlayState = 'paused';
    switcher = 1;
    // moveForward();
    // console.log(pos)
}
