const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const cross = document.querySelector('.close');
const filter = document.querySelector('.filter');

menu.onclick = () => {
    nav.classList.toggle('shown');
    filter.style.opacity = '1';
    menu.style.display = 'none';
    cross.style.display = 'unset';
}

cross.onclick = () => {
    nav.classList.toggle('shown');
    filter.style.opacity = '0';
    menu.style.display = 'unset';
    cross.style.display = 'none';
}

const buttons = document.querySelectorAll('.slider-btn');
const slider = document.querySelector('.slider-inner');

buttons.forEach(button => {
    button.onclick = () => {
        removeColor();
        button.classList.add('active');
        slider.style.transform = `translateX(calc(-100% * ${button.dataset.index}))`;
    }
})

function removeColor() {
    buttons.forEach(button => {
        button.classList.remove('active');
    })
}