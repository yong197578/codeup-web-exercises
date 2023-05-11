const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
//use createTags function to get keyup values from textarea
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter') {
        //set Time out to 10 milisecond to choose target value to clear the input value
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})
//create function to change input to array and filter empty strings to trim and map to manipulate array
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //space and , won't do change array
    console.log(tags);
    tagsEl.innerHTML = ''
    //creating tags
    tags.forEach(tag => {
        //make variable tagEl for span
        const tagEl = document.createElement('span')
        //add className tag
        tagEl.classList.add('tag')
        //innerText to get tag elements
        tagEl.innerText = tag
        //add each tag elements in
        tagsEl.appendChild(tagEl)
    })
}
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHightLightTag(randomTag)
            }, 100)
        }
    }, 100);

    //create set time out to stop random select by times(30) * 100 millisecond
    setTimeout(()=> {
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    //bring node list in index will be random
    return tags[Math.floor(Math.random() * tags.length)]
}
//highlight and unhighlight class functions
function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHightLightTag(tag) {
    tag.classList.remove('highlight')
}