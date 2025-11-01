let open = document.querySelector('#open');
let close = document.querySelector('#close');
let container = document.querySelector('.pop-container');
open.addEventListener('click', ()=>{
    container.classList.add('active');
})

close.addEventListener('click', ()=>{
    container.classList.remove('active');
})