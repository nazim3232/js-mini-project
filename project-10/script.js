let container = document.querySelector("#container");
let image = document.querySelector("img");

container.addEventListener('mousemove', (e) => {
    const offsetLeft = container.offsetLeft;
    const offsetTop = container.offsetTop;
    const x = e.clientX - offsetLeft;
    const y = e.clientY - offsetTop;
    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(2)";
});

container.addEventListener('mouseleave', () => {
    image.style.transformOrigin = "center center";
    image.style.transform = "scale(1)";
});