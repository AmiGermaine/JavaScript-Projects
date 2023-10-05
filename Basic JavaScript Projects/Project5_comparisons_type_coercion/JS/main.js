document.write(typeof "flowers");
document.write(typeof 6);
document.write("22" + 4);
document.write(3E534);
document.write(-4E310);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

document.getElementById("Test").innerHTML = isNaN('This is a string');
document.getElementById("Yes").innerHTML = isNaN('0008')
document.write(4 > 8); // Boolean comparion
document.write(2 < 10)

console.log(3 + 9); //Console Method show the answer to a math question when use console.log tag in JS
console.log(19 > 25);

document.write(7 == 21); // Double equal signs to show true or false 
document.write(7 == 7);

A = "Soil"; // Triple equal signs same as the doube equal signs
B = "Mat";
document.write(A === B);

document.write(9 > 0 && 5 > 3);
document.write(53 > 74 || 45 > 50);

function not_Function() { 
    document.getElementById("Not").innerHTML = !(3 > 4); // Checking for whether "3 > 4" is true or not.
}