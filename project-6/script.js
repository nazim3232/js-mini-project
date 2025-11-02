let colour = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown',
  'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'teal', 'indigo',
  'violet', 'gold', 'silver', 'beige', 'maroon', 'navy', 'olive', 'coral',
  'turquoise', 'salmon', 'plum', 'orchid', 'tan', 'chocolate'
];

console.log(colour.length);

setInterval(() => {
  document.body.style.backgroundColor = colour[Math.floor(Math.random() * 30)];
}, 1000);