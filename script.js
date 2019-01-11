var animalPopulation = 0;
// var allAnimals - a global array containing Animal objects
var allAnimals = [];

// run() or start() - a function called from document.ready() that creates 5 initial animals
function start(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();
    var pooh2 = createAnimal("bear", "pooh2");
    var rarity2 = createAnimal("uni", "rarity2");
    var gemma2 = createAnimal("gir", "gemma2");
    var stinger2 = createAnimal("bee", "stinger2");
    listAnimals();
    optionsOfAnimals();
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
    optionsOfAnimals();
    return animal;
}

// feedAnimals() - a function which uses jQuery .val() to grab the food value from the page 
// and feed it to each animal.  Results write out in the log.
function feedAnimal(){
    $("#animalFeed").empty();
    var food = $("#menu").val();
    for (var a = 0; a < allAnimals.length; a++){
            allAnimals[a].eat(food);
    }
}

// listAnimals() - a function which lists every animal name and type.  Should be run on a
//  page load as well as whenever a new animal is created.
function listAnimals(){
    var localList = "";
    for (var a = 0; a < allAnimals.length; a++){
        localList += allAnimals[a].name + " (" + allAnimals[a].constructor.name + ", favorite food is " + allAnimals[a].favoriteFood + ")" + "<br>";
    }
    $("#animalList").html(localList);
}

// deleteAnimal(name) - a function which receives an animal name from an onclick handler
// and removes that name from allAnimals.  Use array.splice(indexToRemove, itemsToRemove) to remove the animal.  
// Call listAnimals() when done.
function deleteAnimal() {
    // blah
    listAnimals();
}

// This function inputs all of the options into the select box for choosing an animal to delete or rename.
function optionsOfAnimals(){
    for (var a = 0; a < allAnimals.length; a++){
        var option = document.createElement("option");
        option.val(allAnimals[a]);
        $("#identityFind").add(option);
        $("#animalRemovalChoice").add(option);
    }
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