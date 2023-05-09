const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/?supercars/'
const randomBtn = document.querySelector('.btn')
const rows = 5

randomBtn.addEventListener('click', ()=>{
    location.reload()
})

for(let i=0; i < rows *3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}
// console.log(getRandomNum())
// console.log(getRandomSize())
function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}
function getRandomNum() {
    //get random number 1-10 add 300
    return Math.floor(Math.random() * 10) + 300

}