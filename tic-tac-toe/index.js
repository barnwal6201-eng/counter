const box1 = document.getElementById("cell1");
const box2 = document.getElementById("cell2");
const box3 = document.getElementById("cell3");
const box4 = document.getElementById("cell4");
const box5 = document.getElementById("cell5");
const box6 = document.getElementById("cell6");
const box7 = document.getElementById("cell7");
const box8 = document.getElementById("cell8");
const box9 = document.getElementById("cell9");
const reset = document.querySelector(".reset");
const winner = document.getElementById("winner");

    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    let count = 0;
    let isXTurn = true;
    
    boxes.forEach((box, index) =>{
        box.addEventListener('click', () => {

    if(isXTurn){
        box.innerHTML = "✖";
        isXTurn = false;
    }else{
        box.innerHTML = "O";
        isXTurn = true;
    }

     box.disabled = true;
     count++;

     let isWinner = winnerAnnounce();

    if (count === 9 && !isWinner) {
      winner.innerHTML = " Game is Draw !";
    }

   } );
});

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
   ];

const winnerAnnounce = () => {

   for(patterns of winningPatterns){

    let pos1 = boxes[patterns[0]].innerHTML;
    let pos2 = boxes[patterns[1]].innerHTML;
    let pos3 = boxes[patterns[2]].innerHTML;
    
    if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
        if(pos1 === pos2 && pos2 === pos3){
            winner.innerHTML = `Winner is ${pos1} !`;
            boxes.forEach(box => box.disabled = true);
        }
    }
   }
}

reset.addEventListener('click', () => {
    boxes.forEach(box => {
     box.disabled = false;
     box.innerHTML = "";
     console.log("lalita")
 } ) ;
    count = 0;
    winner.innerHTML = "";
    isXTurn = true;
    console.log("resetclicked")
});



