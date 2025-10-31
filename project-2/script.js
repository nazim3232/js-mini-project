let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.textContent  ="My name is Nazim .";
    div.classList.add('notification');
    document.body.appendChild(div);
    setTimeout(()=>{
        div.remove()
    }, 3000);
})