let active = document.querySelectorAll('.panel');

active.forEach(function(panel){
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add('active');
    })
})
function removeActiveClass(){
    active.forEach(function(panel){
        panel.classList.remove('active');
    })
}