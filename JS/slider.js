const slides = document.querySelectorAll('.sliderImg')
let counter = 0;
slides.forEach(
    (slide, index)=> {
        slide.style.left = `${index * 100}%`
    }
)

const goNext = ()=> {
    counter++;
    if(counter>slides.length - 1){
        counter = 0
    }
    // console.log(counter)
    slideImage();
}

const goPrev = ()=> {
    counter--;
    if(counter==-1){
        counter = slides.length - 1;
    }
    // console.log(counter)
    slideImage();
}

const slideImage = ()=> {
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${(counter%5) * 100}%)`
})
}

setInterval(goNext, 2500);