myFunction = function() {
    return "This is my function";
}
var car;
car = (val) => "These are my least favorite car brands: " + val;
document.getElementById("displayCar").innerHTML = car ("dodge, ferrari, mazda");

var ages = [1, 9, 18, 21, 12, 16, 29];

//Using the arrow function to pass in a parameter of age
checkAge = (age) => age >= 18;

function myFunction() {
    //Use the .some() to iterate through the array of ages and display the result.
    document.getElementById("displayAge").innerHTML = ages.some(checkAge);
}