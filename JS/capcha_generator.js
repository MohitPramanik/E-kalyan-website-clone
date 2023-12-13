let capchaBox = document.querySelectorAll('.generated');
let reload = document.querySelectorAll('.reload');

const generateCapcha = () => {
    let capcha = parseInt(Math.floor(Math.random() * (199999-19999) + 199999));
    return capcha;
}

const putCapcha = () => {
    Array.from(capchaBox).forEach((box) => {
        box.innerHTML = generateCapcha();
    });
}

Array.from(reload).forEach((reloads) => {
    reloads.onclick = () => {
        putCapcha();
    }
});