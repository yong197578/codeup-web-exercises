const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#FF5733', '#581845']
//set sqaures to 500 boxes. you can change box sizes
const SQUARES = 500

for(let i=0; i < SQUARES; i++){
    //create class square (500 of them)
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))

    square.addEventListener('mouseout', ()=> removeColor(square))

    container.appendChild(square)
}
function setColor(element){
    console.log(element)
    console.log(colors);
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    console.log(123)
    //fade out in 2 sec due to transition
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}