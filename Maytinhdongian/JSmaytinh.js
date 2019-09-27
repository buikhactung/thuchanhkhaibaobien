
function plus() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let total = document.getElementById("result").innerHTML= ("Result Division: " + (number1 + number2));
    }
function minus() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let difference = document.getElementById("result").innerHTML= ("Result Division: " + (number1 - number2));
}

function multiply() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let result = document.getElementById("result").innerHTML= ("Result Division: " + (number1 * number2));
}

function share() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let total = document.getElementById("result").innerHTML= ("Result Division: " + (number1 / number2));
}



