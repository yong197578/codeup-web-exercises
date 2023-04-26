//querySelectorAll to bring all num's spans(nodelists)
const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

//run function runAnimation
runAnimation()

//replay button function
function resetDOM() {
    //remove hide and show class (reset)
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })
    //add first class span
    nums[0].classList.add('in')
}

function runAnimation() {
    //loop through nodelist inside forEach create function with num and idx arguments
    nums.forEach((num, idx) => {
        console.log(num, idx);
        //total lengths of num - 1
        const nextToLast = nums.length - 1
        //create addevenntlistener to end animation
        num.addEventListener('animationend', (e) => {
            //if name equals to goIn and index is not last index then it's true
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                //then remove in class and add out class
                num.classList.remove('in')
                num.classList.add('out')
                //second condition equals to goOut and using nextElementSlibling method
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                //add next class in
                num.nextElementSibling.classList.add('in')
            } else {
                //when it's done counting, add hide class, final message add show class
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})