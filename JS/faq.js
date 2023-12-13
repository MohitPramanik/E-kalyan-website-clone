let arrow = document.getElementsByClassName('arrow-head')
let openCloseBox = document.getElementsByClassName('open-close')

let boxes = Array.from(openCloseBox)
let arrows = Array.from(arrow)

boxes.forEach((box) => {
    box.onclick = () => {
        let index = boxes.indexOf(box)
        arrows[index].classList.toggle('fa-rotate-180')
    }
})