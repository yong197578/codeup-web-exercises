const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// mouse enters the screen hover left/right and mouse leaves the screen hover right/left
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))