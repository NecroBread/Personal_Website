const tiles = document.querySelectorAll('.project-tile');
const links = [
    'https://codepen.io/necrobread/pen/mdBGdjR', // Tolkien Page
    'https://codepen.io/necrobread/pen/wvrEMxN', // Survey Page
    'https://github.com/NecroBread/Sudoku-and-Other-Games', // Sudoku
    'https://github.com/NecroBread/Book-Spine-Calculator', // Book Spine Calculator
    'https://codepen.io/necrobread/pen/qBPYWYE', // Hello World CodePen
    'https://github.com/NecroBread/Hello-World' // Hello World GitHub
]


tiles.forEach((x, i) => {
    x.addEventListener('click', (e) => {
        window.open(links[i], '_blank').focus();
    })
});