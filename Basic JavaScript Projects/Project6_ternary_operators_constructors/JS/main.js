function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "Your are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {  //Keywords to identify actions to performed.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Pot = new Vehicle("Toyota", "Tundra", "2021", "Black");
var Amy = new Vehicle("Ford", "Mustang", "2019", "Red");
var Shay = new Vehicle("Honda", "Accord", "2023", "Blue");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Amy drives a " + Amy.Vehicle_Color + "-colored " + Amy.Vehicle_Model +
    " manufactured in " + Amy.Vehicle_Year;
}

function count_Function() { //This is nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 15;
        function Plus_five() {Starting_point += 5;}
        Plus_five();
        return Starting_point;
    }
}