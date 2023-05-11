const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    //select all counter class(3 of them) and set it to 0
    counter.innerText= '0'
    const updateCounter = () => {
        //you can use Number(), ParseInt or + to get data number
        const target = +counter.getAttribute('data-target')
        console.log(typeof target, target)
        const c = +counter.innerText
        //if it is target then origin number
        //divide by higher number will do slower increment ex. 1000 will make it slow and 10 will be really quick
        const increment = target /500

        if(c <  target){
            counter.innerText = `${Math.ceil(c + increment)}`
            //you want to setTimeout see number increment. If not, you won't see the animation effect
            setTimeout(updateCounter, 1)
        }
    }
    updateCounter()
})