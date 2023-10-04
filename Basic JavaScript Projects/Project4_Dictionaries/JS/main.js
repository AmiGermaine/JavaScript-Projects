function my_Dictionary() {
    var Car = {
        Model: "Toyota",
        Color: "White",
        Year: "2021",
        Mileage: "Low",
        Sound: "Hissing"
    };
    document.getElementById("Dictionary") .innerHTML = Car.Color; // Identical keys for two pairs becomes undefined
}

function my_Dictionary() {
    var Car = {
        Model: "Toyota",
        Color: "White",
        Year: "2021",
        Mileage: "Low",
        Sound: "Hissing"
    };
    delete Car.Color;
    document.getElementById("Dictionary") .innerHTML = Car.Color; //The car color should be undefined
}
