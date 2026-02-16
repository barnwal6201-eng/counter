const inputNum = document.getElementById("telenumber");
const alertMessage = document.getElementById("alert-message");

inputNum.addEventListener('input', (e) => {
    let numlength = e.target.value.length;
  
    // Remove all non-digit characters using filter
    let digitsOnly = e.target.value
        .split('')
        .filter(char => char >= '0' && char <= '9')
        .join('');
    
    // Limit to 10 digits
    if(digitsOnly.length > 10){
        digitsOnly = digitsOnly.slice(0, 10);
    }

    if(numlength >= 0 && numlength <= 10){
        alertMessage.style.display = "block";
    }else{
        alertMessage.style.display = "none";
    }
   
         e.target.value = format(digitsOnly);
});
 function format(digits) {
    let formatted = "";
    
    for(let i = 0; i < digits.length; i++){
        if(i === 0) formatted += "+(";
        if(i === 3) formatted += ") ";
        if(i === 6) formatted += "- ";
        
        formatted += digits[i];
    }
    
    return formatted;
}


