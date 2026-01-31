const container = document.querySelector(".container");
const userInput = document.getElementById("user-input");
 
 
userInput.addEventListener('input', (e) => {
 
    const inputNum = e.target.value;
    container.innerHTML = "";
 
    for(let row = 0; row < inputNum; row++){
        //for row
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        //for column
        for(let col = 0; col < inputNum; col++){
            const div = document.createElement("div");
            div.className = "box";
            
            div.id = `${row}-${col}`;
 
            rowDiv.appendChild(div);
 
            div.classList.add("baseStyle");
 
            if((row + col) % 2 !== 0 ){
                div.classList.add("black");
            }
 
        }
        container.appendChild(rowDiv);
    };
 
});
 
 
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("box")) {
        reset();
        
        const [targetRow, targetCol] = e.target.id.split("-").map(Number);
        const inputNum = Number(userInput.value);
 
        console.log(targetRow, targetCol);
 
        // Top-left direction
        let row = targetRow;
        let col = targetCol;
        while(row >= 0 && col >= 0){
            const box = document.getElementById(`${row}-${col}`);
            if(box) box.classList.add("clicked-color");
            row--;
            col--;
        }
 
        // Top-right direction
        row = targetRow;
        col = targetCol;
        while(row >= 0 && col < inputNum){
            const box = document.getElementById(`${row}-${col}`);
            if(box) box.classList.add("clicked-color");
            row--;
            col++;
        }
 
        // Bottom-left direction
        row = targetRow;
        col = targetCol;
        while(row < inputNum && col >= 0){
            const box = document.getElementById(`${row}-${col}`);
            if(box) box.classList.add("clicked-color");
            row++;
            col--;
        }
 
        // Bottom-right direction
        row = targetRow;
        col = targetCol;
        while(row < inputNum && col < inputNum){
            const box = document.getElementById(`${row}-${col}`);
            if(box) box.classList.add("clicked-color");
            row++;
            col++;
        }
    }
})
 
 
function reset() {
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
        box.classList.remove("clicked-color");
    });
}






