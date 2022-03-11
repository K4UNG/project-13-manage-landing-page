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

window.onresize = () => {
    if (document.body.clientWidth >= 760) {
        cross.style.display = 'none';
        nav.classList.remove('shown');
    } else {
        if (menu.style.display === 'none') {
            cross.style.display = 'unset';
            nav.classList.add('shown');
        }
    }
}

const form = document.querySelector('.footer-bot form');
const expression = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const msg = document.querySelector('.msg');
const input = document.querySelector('.footer-bot input');

form.onsubmit = () => {
    const mail = document.querySelector('.footer-bot input').value;
    if (mail.match(expression)) {
        msg.textContent = 'Success';
        msg.style.color = 'green';
        input.style['border-color'] = 'greenyellow';
        input.style.color = 'green';
    } else {
        msg.textContent = 'Please insert a valid email';
        msg.style.color = 'red';
        input.style['border-color'] = 'red';
        input.style.color = 'red';
    }
    return false;
}

input.addEventListener('keydown', () => {
    msg.textContent = '';
    input.style.color = 'var(--dark-gray-blue)';
    input.style['border-color'] = 'var(--very-dark-blue)';
})