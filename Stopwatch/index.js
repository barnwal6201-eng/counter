let tens = 0, seconds = 0, minutes = 0;
let interval = null;
const displaytime = document.getElementById("displayTiming");
const buttonstart = document.getElementById("startBtn");
const buttonstop = document.getElementById("stopBtn");
const buttonreset = document.getElementById("resetBtn");

buttonstart.addEventListener('click', () => {
    interval = setInterval(stopwatch, 10);
});

buttonstop.addEventListener('click', () => {
    clearInterval(interval);
});
buttonreset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    displaytime.innerText = "00:00:00";
});

function stopwatch(){
     tens++;
     if(tens == 99){
        tens = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        
     }
        let mindisplay = minutes < 10 ? "0"+ minutes : minutes;
        let secdisplay = seconds < 10 ? "0"+ seconds : seconds;
        let tensdisplay = tens < 10 ? "0" + tens : tens;

     displaytime.innerText = mindisplay +":"+ secdisplay +":"+ tensdisplay;
}


