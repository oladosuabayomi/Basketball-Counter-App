let addOne = document.getElementById("addone");
let addTwo = document.getElementById("addtwo");
let addThree = document.getElementById("addthree");
let countHome = document.getElementById("count-home");
let countGuest = document.getElementById("count-guest");
let resetEl = document.getElementById("reset");
let incrementHome = 0;
let incrementGuest = 0;


/* home */
function incrementHomeByOne() {
    incrementHome += 1;
    countHome.textContent = incrementHome;
}
function incrementHomeByTwo() {
    incrementHome += 2;
    countHome.textContent = incrementHome;
}
function incrementHomeByThree() {
    incrementHome += 3;
    countHome.textContent = incrementHome;
}

/* Guest */
function incrementGuestByOne() {
    incrementGuest += 1;
    countGuest.textContent = incrementGuest;
}
function incrementGuestByTwo() {
    incrementGuest += 2;
    countGuest.textContent = incrementGuest;
}
function incrementGuestByThree() {
    incrementGuest += 3;
    countGuest.textContent = incrementGuest;
}

/* reset */
function resetScore() {
    incrementHome = 0;
    incrementGuest = 0;
    countHome.textContent = incrementHome;
    countGuest.textContent = incrementGuest;
}