const container = document.querySelector(".container");
const userInput = document.getElementById("user-input");


userInput.addEventListener('input', (e) => {

const inputNum = e.target.value;

for(let row = 0; row < inputNum; row++){
    //for row
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    container.appendChild(rowDiv);
    console.log("lalita")
    //for column
    for(let col = 0; col < inputNum; col++){
    const div = document.createElement("div");
    div.className = "box";
    
    div.id = `box-${row}-${col}`;

    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "2px solid black";

    rowDiv.appendChild(div);

    if((row + col) % 2 !== 0 ){
        div.style.backgroundColor = "black"
    }else{
        div.style.backgroundColor = "";
    }

    }
};

});




