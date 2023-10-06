function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function call_Loop() { // A "while loop" function
    const rainbow = ["Black", "Yellow", "Red", "White", "blue"];
    var Color = "";
    var A = 0
    while (rainbow[A]) {
        Color += rainbow[A] + "<br>";
        A++;
    }
    document.getElementById("Loop").innerHTML = Color
}

// A "For Loop" function
var Utensils = ["Knives", "Spoons", "Pots", "Blender", "Whisk", "Forks"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Utensils.length; Y++) {
        Content += Utensils[Y] + "<br>";
    }
    document.getElementById("List_of_Utensils").innerHTML = Content;
}

function Dog_pics() { // Arrays and objects function
    var Dog_Picture = [];
    Dog_Picture[0] = "eating";
    Dog_Picture[1] = "barking";
    Dog_Picture[2] = "running";
    Dog_Picture[3] = "playing";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[3] + ".";
}

function constant_function() { // Constant keywoard
    const Office_Supplies = {type:"Calculator", brand:"TI-84 Plus series", Color:"Gray"};
    Office_Supplies.color = "Gray";
    Office_Supplies.price = "$125";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Office_Supplies.type + " was " + Office_Supplies.price;
}

var B = 38; // Let keyword 
document.write(B);
{
    let B = 22;
    document.write("<br>" + B);
}
document.write("<br>" + B);

let laptop = {  // Object with properties
    maker: "Dell ",
    model: "XPS 15 ",
    year: "2022 ",
    color: "Pink ",
    description : function() {
        return "The laptop is a " + this.year + this.color + this.maker + this.model;
    }
};
document.getElementById("Laptop_Object").innerHTML = laptop.description();