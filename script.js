var animalPopulation = 0;
// var allAnimals - a global array containing Animal objects
var allAnimals = [];

// createAnimal() - a function which uses jQuery .val() to grab values from page and a 
// switch statement to create an instance of the correct animal.  Call listAnimal() when done.

// feedAnimals() - a function which uses jQuery .val() to grab the food value from the page 
// and feed it to each animal.  Results write out in the log.

// listAnimals() - a function which lists every animal name and type.  Should be run on a
//  button click as well as whenever a new animal is created.

// run() or start() - a function called from document.ready() that creates 5 initial animals

// deleteAnimal(name) - a function which receives an animal name from an onclick handler
// and removes that name from allAnimals.  Use array.splice(indexToRemove, itemsToRemove) to remove the animal.  
// Call listAnimals() when done. 


// Some edits and changes to your classes like writing console statements to the page 
// rather than to the console.  

function run(){
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    var zoebot = new Zookeeper("Zoebot");
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
}

class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        (this.favoriteFood == food) ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep(this.name);
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
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmellows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super (name, "leaves");
    }
    eat(food) {
        (food == "leaves") ? super.eat("leaves") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Bee extends Animal {
    constructor(name) {
        super (name, "pollen");
    }
    eat(food) {
        (food == "pollen") ? super.eat("pollen") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}