const imgs = document.getElementById('imgs')
const leftbtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

console.log(img)
function run() {
    idx++
    changeImage()
}

function changeImage() {
    //image-container use slide. default value is 0 (trnaslateX(0)
    //img.length will give 4. node list has 0-3
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 375}px)`

}
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}
rightBtn.addEventListener('click', ()=> {
    idx++
    changeImage()
    resetInterval()
})
leftbtn.addEventListener('click', ()=>{
    idx--
    changeImage()
    resetInterval()
})