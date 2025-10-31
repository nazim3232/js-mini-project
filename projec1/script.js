let btn = document.querySelector('#btn');
let menu = document.querySelector('menu');
btn.addEventListener('click', ()=>
{
    btn.classList.toggle('active');
    menu.classList.toggle('active');
})