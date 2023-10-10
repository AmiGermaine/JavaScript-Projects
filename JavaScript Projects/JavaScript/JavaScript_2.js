function validateForm() {
    var X = document.forms["myForm"]["fname"]["lname"].value;
    if(X == "") {
        alert("Name must be filled out");
        return false;
    }
}
