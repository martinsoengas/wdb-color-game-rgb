let numOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let title = document.querySelector('h1');
let reset = document.getElementById('reset');
let modeButtons = document.querySelectorAll(".mode");

initial()

function initial(){
    setupModeButtons();
    setupSquares();
    resetFunc();
}

function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            resetFunc();
        } )
    }
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', function(){
           let clickedColor = this.style.backgroundColor;
           if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                colorPaint(clickedColor);
                title.style.backgroundColor = clickedColor;
                reset.textContent = "Play again?";
           } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Wrong";
           }
        });
    }
}

function resetFunc(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    reset.textContent = "New colors";
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    title.style.backgroundColor = "steelblue";
}

reset.addEventListener('click', function(){
    resetFunc();
});



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