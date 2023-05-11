const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        //variable x, y = where the click happens in button
        const x = e.clientX
        const y = e.clientY
        // console.log(x,y)
        //where it starts on top and left = offset - position of btn itself
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // console.log(buttonTop, buttonLeft)
        //variable for position inside
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // console.log(xInside, yInside);
        //create circle effect with span class
        const circle = document.createElement(
            'span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        //if you want to use this - function(e) arrow function won't work
        this.appendChild(circle)
        //circle span class is keep generating, so use setTimeout to remove circle span classes
        setTimeout(()=>
            circle.remove(), 500)
    })
})