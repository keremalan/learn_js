var isFull = false;
if (isFull == true) {
    console.log('Box color is green');
} else {
    console.log('Box color is red');
}

if (isFull == true) {
    document.getElementById("depoTank").textContent += "full.";
} else {
    document.getElementById("depoTank").textContent += "empty.";
}