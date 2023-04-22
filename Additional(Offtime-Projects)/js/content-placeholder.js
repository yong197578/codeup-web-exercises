
const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1681846291878-1103198eb2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1600&q=60" alt="" />'
    title.innerHTML = 'Hey! My name is Yong!'
    excerpt.innerHTML = 'This is my content place-holder project. loading for 2 secs with cool css effect. I hope you enjoy it!'
    // profile_img.innerHTML = '<img src="../css/img/myPicture.jpg" alt="" />'
    name.innerHTML = 'Yong Choi'
    date.innerHTML = 'Apr 19, 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
