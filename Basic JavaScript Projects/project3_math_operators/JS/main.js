function addition_Function() { //Addition operation
    var addition = 3 + 5;
    document.getElementById("Math") .innerHTML = "3 + 3 = " + addition;
}

function subtraction_Function() { //Subtraction operation
    var Subraction = 9 - 6;
    document.getElementById("Math") .innerHTML = "9 - 6 = " + Subraction;
}

function multiplication() { //Multiplication operation
    var simple_Math = 7 * 4;
    document.getElementById("Math") .innerHTML = "7 * 4 = " + simple_Math;
}

function division() { //Division operation
    var simple_Math = 2 / 8;
    document.getElementById("Math") .innerHTML = "2 / 8 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 4) * 22 / 2 -5;
     document.getElementById("Math") .innerHTML = "2 plus 4, multiplied by 22 divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 43 % 8
    document.getElementById("Math") . innerHTML = "when you divide 43 by 8 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 11;
    document.getElementById("Math") .innerHTML = -x;
}

var x = 9;
x++;
document.write(x) ;

var x = 6.25;
x--;
document.write(x) ;

window.alert(Math.random() * 50) ;

