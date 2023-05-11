const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

//when button is clicked, it toggles the big class on the boxesContainer element.
//Basically, if element present it will be added, if not, element present it will be removed
btn.addEventListener('click', ()=> boxesContainer.classList.toggle('big'))
//createBoxes function to create boxes and position them within the boxContainer
function createBoxes(){
    //loop for 16 boxes.
    for(let i=0; i < 4; i++){
        for(let j=0; j<4; j++){
         const box = document.createElement('div')
         console.log(box)//create 16 dives
         box.classList.add('box')//create 16 boxes
         box.style.backgroundPosition = `
         ${-j * 125}px 
         ${-i * 125}px`
            //appends the box element to the boxesContainer, adding it to the DOM
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()