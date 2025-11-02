let bt = document.querySelector('#bg-changer');
bt.addEventListener('click', ()=>
{
    document.body.classList.toggle('active');
    bt.classList.toggle('bg-color');
})