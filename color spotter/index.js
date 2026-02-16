const colourContainer = document.getElementById("board");
const scoreId = document.getElementById("score");
const maxScore = document.getElementById("max-score");

let score = parseInt(scoreId.innerHTML);
let maxscore = parseInt(maxScore.innerHTML);

let n = 3;
let count = 0;
let randomNum;
function createBoxes() {
for(let row = 0; row < n; row++){

    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for(let col = 0; col < n; col++){
        const colDiv = document.createElement("div");
        colDiv.className = "box";
        count++;
        console.log(count);

        rowDiv.appendChild(colDiv);
    }
    colourContainer.appendChild(rowDiv);
}
}
createBoxes();

const boxes = document.querySelectorAll(".box");

function fillSameColour() {
 const randomColour = cerateRandomColour()
 boxes.forEach(box => {
    box.style.backgroundColor = randomColour;
    //box.style.opacity = "0.7";

 });
}
fillSameColour();
 
function cerateRandomColour(){
    const letters = '0123456789ABCDEF';
    let colour = '#';

    for(let i = 0; i < 6; i++){
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
} 

function generateBox(){
    randomNum = Math.floor(Math.random() * (n * n));
    
    // Reset all boxes first
    boxes.forEach(box => {
        box.style.opacity = "1";
    });
    
    // Highlight the random box
   boxes[randomNum].style.opacity = "0.9";
    
    console.log("Random box index:", randomNum);
}

generateBox();

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if(index === randomNum){
            console.log("clicked");
            scoreId.innerHTML = score + 1;
            maxScore.innerHTML = maxscore + 1;
            n++;
            createBoxes();
        }
    })
})
 