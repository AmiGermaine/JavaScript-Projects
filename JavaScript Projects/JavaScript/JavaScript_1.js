function Day_function() { // Switch statement
    var Day_Output;
    var Days = document.getElementById("Day_Input").value;
    var Day_String = " is a nice day!";
    switch(Days) {
        case "Monday":
          Day_Output = "Monday" + Day_String;
        break;
        case "Tuesday":
          Day_Output = "Tuesday" + Day_String;
        break;
        case "Wednesday":
          Day_Output = "Wednesday" + Day_String;
        break;
        case "Thursday":
          Day_Output = "Thursday" + Day_String;
        break;
        case "Friday":
          Day_Output = "Friday" + Day_String;
        break;
        case "Saturday":
          Day_Output = "Saturday" + Day_String;
        break;
        case "Sunday":
          Day_Output = "Sunday" + Day_String;
        break;
        default:
        Day_Output = "Please enter a Day exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Day_Output;
}

function Hello_World_Function() {  // Getelementsbyclassname() method.
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var C = document.getElementById("ID_Name"); // <CANVAS> ELEMENT to create a circle
var ctx = C.getContext("2d");
ctx.beginPath();
ctx.arc(100, 150, 100, 0, 4*Math.PI);
ctx.stroke();

// const c = document.getElementById("ID_Name");  // <CANVAS> ELEMENT to create a LinearGradient() method.
// const ctx = c.getContext("2d");

// const grd = ctx.createLinearGradient(0, 0, 170, 0);
// grd.addColorStop(0, "white");
// grd.addColorStop(1, "black");

// ctx.fillStyle = grd;
// ctx.fillRect(20, 20, 150, 100);