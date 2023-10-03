function displayDate() { //Defining a function and naming it
    var str = "displayDate"; //Defining a variable and giving it 
                                         //a string value
    document.getElementById("demo") .innerHTML = Date() ; //Putting the value 
                                            //of the variable into the HTML elementFromPoint
                                            //with the "displayDate" id
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate") .innerHTML = sentence;
}