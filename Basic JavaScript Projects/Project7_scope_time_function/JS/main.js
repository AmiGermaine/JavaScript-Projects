var X = 23;  // The Scope of Global variable
function Add_numbers_1() { //Scope for Local Variable
    var X = 15;
   document.write(10 + X + "one" + "<br>");
}
function Add_numbers_2() {
     document.write(X + 100 + "two" + "<br>");
    }
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
   var X = 15;
   console.log(20 + X);
 }
function Add_numbers_4() {
    console.log(X + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
document.write(20 + X + "five" + "<br>");
}
 function Add_numbers_6() {
    document.write(X + 100 + "six" + "<br>");
}
Add_numbers_5();
Add_numbers_6();

// If and Else Statements
if (3 < 6) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if (new Date().getHours() < 18) { // Browser will display "How is it going today" if the condition is true.
        document.getElementById("Greeting").innerHTML = "How is it going today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 19) {
       Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning there!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}