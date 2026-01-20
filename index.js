const count = document.getElementById("countervalue");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const changeBy = document.getElementById("changeby");
const resetBy = document.getElementById("reset");
decrement.addEventListener('click', () => {
    const counterValue = parseInt(count.innerText);
    const step = parseInt(changeBy.value);
    if(isNaN(step) || step < 1 || step > 10){
        changeBy.value = 1;
    }
    count.innerText = counterValue - step;
})

increment.addEventListener('click', () => {
    const counterValue = parseInt(count.innerText);
    const step = parseInt(changeBy.value);
    if(isNaN(step) || step < 1 || step > 10){
        changeBy.value = 1;
    }
    count.innerText = counterValue + step;
})

resetBy.addEventListener('click', () => {
     const counterValue = parseInt(count.innerText);
     count.innerText = 0;
});
