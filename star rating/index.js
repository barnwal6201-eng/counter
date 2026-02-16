const circleContainer = document.getElementById("circle-container");
const circles = document.querySelectorAll('.circle');
const ratings = document.querySelectorAll('.ratings');

// Single click to rate
circleContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        // Extract the number from the ID (circle1 -> 1)
        const clickedIndex = parseInt(e.target.id.replace('circle', '')) - 1;
        
        // Hide all ratings
        ratings.forEach(rating => rating.style.display = "none");
        
        // Fill/unfill circles
        circles.forEach((circle, index) => {
            if(index <= clickedIndex) {
                circle.style.backgroundColor = "gold";
            } else {
                circle.style.backgroundColor = "";
            }
        });
        
        // Show corresponding rating
        ratings[clickedIndex].style.display = "block";
    }
});

// Double click to reset
circleContainer.addEventListener('dblclick', (e) => {
    if(e.target.classList.contains('circle')) {
        circles.forEach(circle => circle.style.backgroundColor = "");
        ratings.forEach(rating => rating.style.display = "none");
    }
});

/*const rating1 = document.getElementById("verybad");
const rating2 = document.getElementById("bad");
const rating3 = document.getElementById("good");
const rating4 = document.getElementById("verygood");
const rating5 = document.getElementById("excellent"); 

const circleContainer = document.getElementById("circle-container");
const allRatings = [rating1, rating2, rating3, rating4, rating5];
const allCircles = document.querySelectorAll('.circle');

// Function to hide all ratings
function hideAllRatings() {
    allRatings.forEach(rating => rating.style.display = "none");
}

// Function to reset all circles
function resetAllCircles() {
    allCircles.forEach(circle => circle.style.backgroundColor = "");
}

// Function to fill circles up to index
function fillCircles(upToIndex) {
    allCircles.forEach((circle, index) => {
        if(index <= upToIndex) {
            circle.style.backgroundColor = "gold";
        } else {
            circle.style.backgroundColor = "";
        }
    });
}

circleContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        hideAllRatings(); // Hide all ratings first
        
        if(e.target.id === "circle1"){
            fillCircles(0);
            rating1.style.display = "block";
        } else if(e.target.id === "circle2"){
            fillCircles(1);
            rating2.style.display = "block";
        } else if(e.target.id === "circle3"){
            fillCircles(2);
            rating3.style.display = "block";
        } else if(e.target.id === "circle4"){
            fillCircles(3);
            rating4.style.display = "block";
        } else if(e.target.id === "circle5"){
            fillCircles(4);
            rating5.style.display = "block";
        }
    }
});

// Double click to reset
circleContainer.addEventListener('dblclick', (e) => {
    if(e.target.classList.contains('circle')) {
        resetAllCircles();
        hideAllRatings();
    }
});*/
