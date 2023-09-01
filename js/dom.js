const button = document.querySelector('button');
const color = document.getElementById('color');

// THIS FUNCTION IS TO GENERATE A RANDOM COLOR
function generateRandomolor() {
    let digits = '0123456789ABCDEF';
    let hexadecimalColors = '#';

    // USUALLY AN HEXADECIMAL COLOR HAS 6 DIGITS. THE LOOP FOR IS TO GENERATE THESE 6 DIGITS
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        hexadecimalColors += digits[randomIndex];
    }

    // RETURN THE GENERATED COLOR
    return hexadecimalColors;
}

// EVENT
button.addEventListener('click', function() {

    // ASSIGNING THE GENERATED COLOR TO A VARIABLE
    let  randomColor = generateRandomolor();

    // UPDATE TEXT
    color.textContent = randomColor;

    // UPDATE BACKGROUND COLOR
    document.body.style.backgroundColor = randomColor;
});

