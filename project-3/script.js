let myName = `This is the show of the Nazim Chowdhury , ❤️ .`;

let index = 0;
function showText()
{
     document.body.textContent = myName.slice(0, index);
     index++;
     if(index>myName.length-1)
     {
        index=0;
     }
}

setInterval(showText, 100);