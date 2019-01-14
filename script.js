var animalPopulation = 0;
// var allAnimals - a global array containing Animal objects
var allAnimals = [];

// run() or start() - a function called from document.ready() that creates 5 initial animals
function start(){
    var tigger = createAnimal("tig", "Tigger");
    tigger.eat("meat");
    var pooh = createAnimal("bear", "Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = createAnimal("uni", "Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = createAnimal("gir", "Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();
    var stinger = createAnimal("bee", "Stinger");
    stinger.eat("honey");
    stinger.sleep();
    listAnimals();
}

// createAnimal() - a function which uses jQuery .val() to grab values from page and a 
// switch statement to create an instance of the correct animal.  Call listAnimal() when done.
function createAnimal(automaticType, automaticName){
    if (automaticType == null){
        var type = $("#typeOfAnimal").val();
    } else {
        var type = automaticType;
    }
    if (automaticName == null){
        var name = $("#animalName").val();
    } else {
        var name = automaticName;
    }
    switch(type) {
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
    }
    listAnimals();
    return animal;
}

// feedAnimals() - a function which uses jQuery .val() to grab the food value from the page 
// and feed it to each animal.  Results write out in the log.
function feedAnimal(){
    $("#animalFeed").empty();
    var food = $("#menu").val();
    for (var a = 0; a < animalPopulation; a++){
            allAnimals[a].eat(food);
    }
}

// listAnimals() - a function which lists every animal name and type.  Should be run on a
//  page load as well as whenever a new animal is created.
function listAnimals(){
    var localList = "";
    for (var a = 0; a < animalPopulation; a++){
        localList += allAnimals[a].name + " (" + allAnimals[a].constructor.name + ", favorite food is " + allAnimals[a].favoriteFood + ")" + "<br>";
    }
    $("#animalList").html(localList);
}

// deleteAnimal(name) - a function which receives an animal name from an onclick handler
// and removes that name from allAnimals.  Use array.splice(indexToRemove, itemsToRemove) to remove the animal.  
// Call listAnimals() when done.
function deleteAnimal() {
    var name = $("#removalInput").val();
    for (var a = 0; a < animalPopulation; a++){
        if (name == allAnimals[a].name){
            $("#animalFeed").append(allAnimals[a].name + " has been either released into the wild, or sent to another zoo.");
            allAnimals.splice(a, 1);
        }
    }
    listAnimals();
    $("#removalInput").val("");
}

// this function changes an animal's name.
function changeName(){
    var oldName = $("#identityInput").val();
    var newName = $("#newIdentityInput").val();
    for (var a = 0; a < animalPopulation; a++){
        if (oldName == allAnimals[a].name){
            allAnimals[a].name = newName;
        }
    }
    listAnimals();
    $("#identityInput").val("");
    $("#newIdentityInput").val("");
}

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

/*function run(){
        var tigger = new Tiger("Tigger");
        var pooh = new Bear("Pooh");
        var rarity = new Unicorn("Rarity");
        var gemma = new Giraffe("Gemma");
        var stinger = new Bee("Stinger");
    }

    class Zookeeper {
        constructor(name) {
            this.name = name;
        }
        feedAnimals(animals, food) {
            console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " animals");
            for (var a = 0; a < animals.length; a++){
                animals[a].eat(food);
            }
        }
    }*/

// DELETE RUN() AND ZOOKEEPER CLASS IF NOT NEEDED AT END