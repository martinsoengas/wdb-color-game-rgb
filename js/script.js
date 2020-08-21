let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let title = document.querySelector('h1');
let reset = document.getElementById('reset');
let easyBtn = document.querySelector('#easy-btn');
let hardBtn = document.querySelector('#hard-btn');


easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
})

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
})

reset.addEventListener('click', function(){
    messageDisplay.textContent = "";
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New colors";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    title.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener('click', function(){
        // grab color of clicked square
       let clickedColor = this.style.backgroundColor;
       // compare color to pickedColor
       if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            colorPaint(clickedColor);
            title.style.backgroundColor = clickedColor;
            reset.textContent = "Play again?";
       } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
       }
    });
}

function colorPaint(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    // pick random number index
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    let arr = []
    // add num random colors to array
    for(let i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a red from 0 to 255
    let red = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    let green = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}