function full_Sentence() {  // "Concat() Method" connecting two or more strings.
    var part_1 = "What can ";
    var part_2 = "I say so ";
    var part_3 = "you can believe ";
    var part_4 = "in stars. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
} 

function slice_Method() { // Extracting String parts
    var Sentence = "Hard work pays off.";
    var Section = Sentence.slice(4 , 9);
    document.getElementById("Slice").innerHTML = Section;
}

function toUpper_Case() { //Turned the whole sentence to upper case
    var Convert = "The Sky is clear today.";
    var Result = Convert.toUpperCase();
    document.getElementById("Cap").innerHTML = Result;
}

//number methods "toString()" and "toPrecision()"
function string_Method() { 
    var X = 234;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 1234.56799333596;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}