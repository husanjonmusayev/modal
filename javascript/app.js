let openBtn = document.getElementById('open-btn')
let modal = document.getElementById('modal')
let cloos = document.getElementById('cloos')
let overflow = document.getElementById('overflov')

openBtn.addEventListener('click', function(){
modal.style.display = 'block'
overflow.style.display = 'block'
openBtn.style.display = 'none'
})

cloos.addEventListener('click', function(){
    modal.style.display = 'none'
    overflow.style.display = 'none'
    openBtn.style.display = 'block'  
})