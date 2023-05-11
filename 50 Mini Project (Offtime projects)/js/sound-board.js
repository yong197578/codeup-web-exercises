
//create array for all sounds effects
const sounds=['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//each array sounds run a function as sound
sounds.forEach(sound => {
    //create variable btn and create button element
    const btn = document.createElement('button');
    //add class btn for styling
    btn.classList.add('btn');
    //innerText to sound itself
    btn.innerText = sound;
    //create click event listener function to grab sound (array) and use play() method - this only works on audio files
    btn.addEventListener('click', ()=> {
        stopSongs();
        document.getElementById(sound).play();
    })
    //select buttons container and use appendChild to pass the button. This will crete buttons
    document.getElementById('buttons').appendChild(btn);
})

//create function for stop songs - when user clicks different box sound will stop and play next one.
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        //use pause() method to stop the sound
        song.pause();
        //because this is audio file make song current time to 0(reset)
        song.currentTime = 0;
    })
}