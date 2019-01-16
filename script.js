// These are the global variables.
var animalPopulation = 0;
var allAnimals = [];

// This function creates five animals to begin and lists them.
function start(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmellows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();
    var stinger = new Bee("stinger");
    stinger.sleep();
    listAnimals();
}

// This function creates a new animal.
function createAnimal() {
    var type = $("#typeOfAnimal").val();
    var name = $("#animalName").val();
    if (name == "") {
        alert("Oops! You didn't input any name for your animal. Please do so now.");
    } else {
        switch (type) {
            case "tig":
                var animal = new Tiger(name);
                break;
            case "bear":
                var animal = new Bear(name);
                break;
            case "uni":
                var animal = new Unicorn(name);
                break;
            case "gir":
                var animal = new Giraffe(name);
                break;
            case "bee":
                var animal = new Bee(name);
                break;
            case "gabe": // this was done with the permission of Gabe, he fully endorses this (quote: "I consent to you using my name")
                var animal = new Gabe(name);
                break;
        }
        listAnimals();
    }
}

// This function feeds all the animals.
function feedAnimal(){
    $("#animalFeed").empty();
    var food = $("#menu").val();
    for (var a = 0; a < animalPopulation; a++){
            allAnimals[a].eat(food);
    }
}

// This function lists all the animals.
function listAnimals(){
    var localList = "";
    for (var a = 0; a < animalPopulation; a++){
        localList += allAnimals[a].name + " (" + allAnimals[a].constructor.name + ", favorite food is " + allAnimals[a].favoriteFood + ")" + "<br>";
    }
    $("#animalList").html(localList);
}

// This function deletes an animal.
function deleteAnimal() {
    var name = $("#removalInput").val();
    for (var a = 0; a < animalPopulation; a++){
        if (name == allAnimals[a].name){
            $("#animalFeed").append(allAnimals[a].name + " has been either released into the wild, or sent to another zoo.");
            allAnimals.splice(a, 1);
            animalPopulation--;
        }
    }
    if (name == ""){
        alert("Oops! You didn't enter any names. Please do so now.");
    }
    listAnimals();
    $("#removalInput").val("");
}

// This function changes an animal's name.
function changeName(){
    var oldName = $("#identityInput").val();
    var newName = $("#newIdentityInput").val();
    for (var a = 0; a < animalPopulation; a++){
        if (oldName == allAnimals[a].name){
            allAnimals[a].name = newName;
            $("#animalFeed").append(oldName + " is now known as " + newName);
        }
    }
    if (oldName == "" || newName == "") {
        alert("Oops! The current name of the animal and/or the name you want it to have is blank. Please correct this error. Thank you!");
    }
    listAnimals();
    $("#identityInput").val("");
    $("#newIdentityInput").val("");
}

// These are all the animal classes.
class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
        allAnimals.push(this);
    }
    sleep() {
        $("#animalFeed").append(this.name + " sleeps for 8 hours <br>");
    }
    eat(food) {
        $("#animalFeed").append(this.name + " eats " + food + "<br>");
        (this.favoriteFood == food) ? $("#animalFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>") : this.sleep(this.name);
    }
    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, "fish");
    }
    sleep() {
        $("#animalFeed").append(this.name + " hibernates for 4 months <br>");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }
    sleep() {
        $("#animalFeed").append(this.name + " sleeps in a cloud" + "<br>");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super (name, "leaves");
    }
    eat(food) {
        (food == "leaves") ? super.eat("leaves") : $("#animalFeed").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
    }
}

class Bee extends Animal {
    constructor(name) {
        super (name, "pollen");
    }
    eat(food) {
        (food == "pollen") ? super.eat("pollen") : $("#animalFeed").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
    }
    sleep(){
        $("#animalFeed").append(this.name + " never sleeps <br>");
    }
}

// This was done with the permission of Gabriel Fantacone.
class Gabe extends Animal {
    constructor(name) {
        super(name, "chocolate");
    }
}