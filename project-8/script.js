let image = document.querySelector('#image');
let img = document.querySelectorAll('#image img');

let index = 0;
function run() {
   index++;
   if (index > 4) {
       index = 0;
   }
   image.style.transform = `translateX(${-index * 500}px)`;
}
setInterval(run, 2000);