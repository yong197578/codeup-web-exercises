
const insert = document.getElementById('insert');


window.addEventListener('keydown', (e) => {
    // console.log(e)
    insert.innerHTML = `<div class="key">
<!--            if e.key is equal to empty string then put Space else e.key Space key will give you empty string-->
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>`
})