const addBtn = document.getElementById('add')
//pull notes from local storage
const notes = JSON.parse(localStorage.getItem('notes'))
console.log(notes)
//if there is notes loop through each and add new notes
if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

//function to create new note
function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    //set textArea value set to text
    textArea.value = text
    //if the text is not empty, the main section is displayed otherwise it's hidden
    main.innerHTML = marked(text)
    //delete button to remove note and update
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })
    //when edit button clicked toggle to visible and hidden states using two toggle classList
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    //when textarea eleemtn input event is fired
    textArea.addEventListener('input', (e) => {
        //const textAreaValue =e.target.value;
        const { value } = e.target
        //mark function is used to convert marked value(text) to HTML
        main.innerHTML = marked(value)
        //update local storage with new note content
        updateLS()
    })
    //note element is appended to doc body
    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    // each note notes array to push on to it note.value
    notesText.forEach(note => notes.push(note.value))
    console.log(notes)
    localStorage.setItem('notes', JSON.stringify(notes))
}

// //check in Application tap - check local storage and check key and value
// localStorage.setItem('name', 'Brad')
// localStorage.getItem('name')
// //remove the local storage item
// localStorage.removeItem('name')
//JSON.stringify(object) then you can pass down to JSON.parse(object)
// localStorage.setItem('name', JSON.stringify())
// JSON.parse(localStorage.getItem('name'))
// localStorage.removeItem('name')