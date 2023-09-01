const button = document.querySelector('button');
const color = document.getElementById('color');

function generateRandomolor() {
    let digits = '0123456789ABCDEF';
    let hexadecimalColors = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        hexadecimalColors += digits[randomIndex];
    }

    return hexadecimalColors;
}

button.addEventListener('click', function() {

    let  randomColor = generateRandomolor();

    // UPDATE TEXT
    color.textContent = randomColor;

    // UPDATE BACKGROUND COLOR
    document.body.style.backgroundColor = randomColor;
});

