function hurtRain()
{
       let container = document.createElement('div');
       container.textContent = '❤️';
       document.body.append(container);

       container.classList.add('hurtContainer');
       container.style.left = Math.random()*100 +'vw';
       container.style.animationDuration = Math.random()*6;
}

setInterval(hurtRain, 100);