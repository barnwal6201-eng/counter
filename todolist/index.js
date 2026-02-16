const userInput = document.getElementById("tocreate-list");
const showList = document.getElementById("output");
const alertMess = document.querySelector(".message");

userInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        event.preventDefault(); // Prevent form submission if inside a form
        
        createListItem(event.target.value);
        event.target.value = ""; // Clear input after adding
        alertMess.style.display = "none";
    } else if (event.key === "Enter") {
        alertMess.style.display = "block";
    }
});

function createListItem(text) {
    // Create list item container
    const lists = document.createElement("li");
    lists.classList.add("dotRemove");
    
    // Create text input (disabled by default)
    const userText = document.createElement("input");
    userText.value = text;
    userText.classList.add("inputStyle");
    userText.disabled = true;
    
    // Create edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.classList.add("baseStyle");
    editBtn.setAttribute("aria-label", "Edit");
    
    // Create save button (hidden initially)
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "💾";
    saveBtn.classList.add("baseStyle");
    saveBtn.style.display = "none";
    saveBtn.setAttribute("aria-label", "Save");
    
    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "🗑️";
    delBtn.classList.add("baseStyle");
    delBtn.setAttribute("aria-label", "Delete");
    
    // Edit functionality
    editBtn.addEventListener('click', () => {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        userText.disabled = false;
        userText.focus(); // Focus on input for better UX
    });
    
    // Save functionality
    saveBtn.addEventListener('click', () => {
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
        userText.disabled = true;
    });
    
    // Delete functionality
    delBtn.addEventListener('click', () => {
        lists.remove();
    });
    
    // Append all elements
    lists.appendChild(userText);
    lists.appendChild(editBtn);
    lists.appendChild(saveBtn);
    lists.appendChild(delBtn);
    showList.appendChild(lists);
}



/*const userInput = document.getElementById("tocreate-list");
const showList = document.getElementById("output");
const alertMess = document.querySelector(".message");


userInput.addEventListener('keydown', function(event) {
    if(event.key === "Enter"){
          messageAlert();

        const lists = document.createElement("li");
        showList.appendChild(lists);
        lists.classList.add("dotRemove");

        const userText = document.createElement("input");
        userText.value = event.target.value;
        lists.appendChild(userText);
        userText.classList.add("inputStyle");
        userText.disabled = true;

        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        lists.appendChild(editBtn);
        editBtn.classList.add("baseStyle");

         editBtn.addEventListener('click', (e) => {
           const savebtn = document.createElement("button");
           savebtn.innerHTML = "💾";
           lists.appendChild(savebtn);
           editBtn.style.display = "none";
           userText.disabled = false;
           userText.removeAttribute("style");
           
           savebtn.addEventListener('click', (e) => {
            editBtn.style.display = "inline";
            savebtn.style.display = "none";
            userText.disabled = true;
           })

         })

         const delBtn = document.createElement("button");
        delBtn.innerHTML = "🗑️";
        lists.appendChild(delBtn);
        delBtn.classList.add("baseStyle");

        delBtn.addEventListener('click', (e) => {
             
                lists.remove();
                savebtn.style.display = "none";
        
        });
    }
    
})
function messageAlert(){
if(showList.value === ""){
  alertMess.style.display = "block";
}else{
    alertMess.style.display = "none";
    console.log("display")
}
}
*/