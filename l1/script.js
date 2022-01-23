var isFull = true;
var isLogIn = true;
var userName = "Kerem";
var userSurname = "Alan"
var username = userName + " " + userSurname;
console.log(username);

function takeFuel() {
    isFull = true;
}

function checkTank() {
    if (isFull == true) {
        document.getElementById("depoTank").textContent += "full.";
    } else {
        document.getElementById("depoTank").textContent += "empty.";
    }
}

function ride() {
    if (isFull == true) {
        document.getElementById("ride").textContent += "You can ride, your gas tank is full";
        isFull = false;
    } else {
        document.getAnimations("ride").textContent += "You can't ride your car, gas tank is empty";
    }
}

function lookGasTable() {
    if (document.getElementById("depoTank").textContent.includes("empty")) {
        document.getElementById("depoTank").style.color = "red";
    } else {
        document.getElementById("depoTank").style.color = "green";
    }
}

if (isLogIn == true) {
    document.getElementById("welcome_msg").textContent += "Welcome," + " " + userName + "!";
} else {
    document.getElementById("welcome_msg").textContent += "Hello, you're not create an account, yet!";
}

if (document.getElementById("depoTank").textContent.includes("empty")) {
    document.getElementById("depoTank").style.color = "red";
} else {
    document.getElementById("depoTank").style.color = "green";
}

if (isFull == true) {
    document.getElementById("depoTank").textContent += "full.";
} else {
    document.getElementById("depoTank").textContent += "empty.";
}

if (isFull == true) {
    console.log('Box color is green');
} else {
    console.log('Box color is red');
}