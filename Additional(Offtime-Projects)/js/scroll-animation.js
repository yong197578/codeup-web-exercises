const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();
function checkBoxes(){
    //show height of windows - where which windows in trigger
    console.log(window.innerHeight / 5 * 4);
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(function(box){
        const boxTop = box.getBoundingClientRect().top

        //see top of the box less than trigger bottom then show box if is more then remove box
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}