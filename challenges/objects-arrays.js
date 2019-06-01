// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous

const trex = {
  name: "tyrannosaurus",
  diet: "carnivorous",
  weight: "7000kg",
  length: "12m",
  period: "Late Cretaceous",
  roaring: function(){
    return "RAWERSRARARWERSARARARRRR!"
  }
}

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

const stego = {
  name: "stegosaurus",
  diet: "herbivorous",
  weight: "2000kg",
  length: "9m",
  period: "Late Jurassic"
}

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous

const velo = {
  name: "velociraptor",
  diet: "carnivorous",
  weight: "15kg",
  length: "1.8m",
  period: "Late Cretaceous"
}

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(trex.weight);

// What was the diet of a velociraptor?
console.log(velo.diet);

// How long was a stegosaurus?
console.log(stego.length);

// What time period did tyrannosaurus live in?
console.log(trex.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(trex.roaring());



// // ==== ADVANCED Array Methods ====

// // Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


// zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
// {"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
// {"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
// {"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
// {"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
// {"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
// {"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
// {"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
// {"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
// {"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

// /* Request 1: .forEach()

// The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

// */
// // const animalNames = [];

// // function firstScience(arry){
// //   animalNames.push(`Name: ${arry.animal_name} Scientific: ${arry.scientific_name}`)
// // }

// // zooAnimals.forEach(firstScience)
// // console.log(animalNames);

// // var animalNames = [] 
// // zooAnimals.forEach(animal => animalNames.push(`Name: ${animal.animal_name}, Scientific: ${animal.scientific_name}`))
// // console.log(animalNames)

// /* Request 2: .map()    

// The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

// */

// // const lowerCase = [];

// // function getLow(arry){
// //   lowerCase.push(arry.animal_name.toLowerCase())
// // }

// // zooAnimals.map(getLow)
// // console.log(lowerCase); 

// var lowerCase = zooAnimals.map(animal => animal.animal_name.toLowerCase())
// console.log(lowerCase)

// /* Request 3: .filter() 

// The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

// */
// // const lowerPopulation = [];

// // function howMany(arry){
// //   if(arry.population < 5){
// //     lowerPopulation.push(`the ${arry.animal_name} has a population of ${arry.population}`)
// //   }
// // }

// // zooAnimals.filter(howMany)
// // console.log(lowerPopulation);

// var lowerPopulation = zooAnimals
//   .filter(animal => animal.population < 5)
//   .map(animal => animal.animal_name)
// console.log(lowerPopulation)

// /* Request 4: .reduce() 

// The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

// */
// // const populationTotal = 0;


// // function thatPop(total, arry) {
// //   return (total + arry.population)
// // }

// // const populationTotal = zooAnimals.reduce(thatPop, 0)
// // console.log(populationTotal);

// var populationTotal = zooAnimals.reduce((total, animal) => total + animal.population, 0)
// console.log(populationTotal)










// // let ticketPriceTotal = [];

// //   function addDonations(total, cash){
// //     return (total + cash.donation)
// //   }

// // ticketPriceTotal.push(runners.reduce(addDonations, 0))
// // console.log(ticketPriceTotal);

// /* 

// Stretch: If you haven't already, convert your array method callbacks into arrow functions.

// */


// // ==== Callbacks ====  

// /* Step 1: Create a higher-order function that accepts a callback
//   * Create a higher-order function named consume that can take 3 parameters.
//   * The first two parameters can accept any argument
//   * The last parameter accepts a callback 
//   * In the body of the function return the callback with the two parameters that you created
// */

// function consume(arg1, arg2, cb){
//   return cb(arg1, arg2)
// }

// /* Step 2: Create several functions to callback with consume();
//   * Create a function named add that returns the sum of two numbers
//   * Create a function named multiply that returns the product of two numbers 
//   * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
// */

// // function add(a1, a2){
// //   console.log(a1 + a2)
// // }

// // function multiply(a1, a2){
// //   console.log(a1 * a2)
// // }

// // function greeting(a1, a2){
// //   console.log(`Hello ${a1} ${a2}, it's nice to meet you`)
// // }


// // /* Step 3: Check your work by un-commenting the following calls to consume(): */
// // consume(2,2,add); // 4
// // consume(10,16,multiply); // 160
// // consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!




// // // ==== Closures ==== 

// // // Explain in your own words why `nestedfunction()` can access the variable `internal`.

// // // Explanation: 


// // const external = "I'm outside the function";

// // function myFunction() {
// //   console.log(external);
// //   const internal = "Hello! I'm inside myFunction!";

// //   function nestedFunction() {
// //     console.log(internal);
// //   };
// //   nestedFunction();
// // }
// // myFunction();










// // /* ===== Prototype Practice ===== */

// // // Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

// // /* == Step 1: Base Constructor ==
// //   Create a constructor function named CuboidMaker that accepts properties for length, width, and height
// // */

// // function CuboidMaker(attr){
// //   this.length = attr.length;
// //   this.width = attr.width;
// //   this.height = attr.height;
// // }


// // /* == Step 2: Volume Method ==
// //   Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
// //   Formula for cuboid volume: length * width * height
// // */

// // CuboidMaker.prototype.volume = function(){
// //   return (this.length * this.width * this.height)
// // }


// // /* == Step 3: Surface Area Method ==
// //   Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

// //   Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
// // */

// // CuboidMaker.prototype.surfaceArea = function(){
// //   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
// // }


// // /* == Step 4: Create a new object that uses CuboidMaker ==
// //   Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
// //   Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
// // */

// // const cuboid = new CuboidMaker({
// //   width: 5,
// //   length: 4,
// //   height: 5
// // })

// // // Test your volume and surfaceArea methods by uncommenting the logs below:
// // console.log(cuboid.volume()); // 100
// // console.log(cuboid.surfaceArea()); // 130




// // 1. Copy and paste your prototype in here and refactor into class syntax.


// // 1. Copy and paste your prototype in here and refactor into class syntax.


// // 1. Copy and paste your prototype in here and refactor into class syntax.


// // class CuboidMaker {
// //     constructor(attr) {
// //         this.length = attr.length;
// //         this.width = attr.width;
// //         this.height = attr.height;
// //     }
// //     volume() {
// //         return (this.length * this.width * this.height);
// //     }
// //     surfaceArea() {
// //         return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// //     }
// // }

// // const cuboid = new CuboidMaker({
// //     width: 5,
// //     length: 4,
// //     height: 5
// //   })

// // // Test your volume and surfaceArea methods by uncommenting the logs below:
// // console.log(cuboid.volume()); // 100
// // console.log(cuboid.surfaceArea()); // 130

// // // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes

// // class CubeMaker extends CuboidMaker{
// //     constructor(attr){
// //         super(attr)
// //         this.side = attr.side;
// //     }
// //     cubeVolume(){
// //         return Math.pow(this.side, 3)
// //     }
// //     cubeSurface(){
// //         var sides = Math.pow(this.side, 2)
// //         return sides * 6
// //     }
// // }

// // const cube = new CubeMaker({
// //     side: 5
// // })

// // console.log(cube.cubeVolume());
// // console.log(cube.cubeSurface());

// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the universities in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
// const universities = [];

// function schoolList(item){
//   universities.push(item.university)
// }

// graduates.forEach(schoolList)
// console.log(universities.sort())

let schoolList = graduates.map(grads => `${grads.university}`)
console.log(schoolList)

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
// const contactInfo = [];

// function thatContact(item){
//   contactInfo.push(`${item.first_name} ${item.email}`)
// }

// graduates.forEach(thatContact)
// console.log(contactInfo);

let contactInfo = graduates.map(info => `${info.first_name} ${info.email}`)
console.log(contactInfo)


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
// const uni = [];

// function uniFind(item){
//   if(item.university.includes('Uni')){
//     uni.push(item.university)
//   }
// }

// graduates.forEach(uniFind)
// console.log(uni);

let findUni = graduates.filter(unis => unis.university.includes('Uni'))
              .map(unis => unis.university)
console.log(findUni)



// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
// const animalNames = [];

// function firstScience(arry){
//   animalNames.push(`Name: ${arry.animal_name} Scientific: ${arry.scientific_name}`)
// }

// zooAnimals.forEach(firstScience)
// console.log(animalNames);

var animalNames = [] 
zooAnimals.forEach(animal => animalNames.push(`Name: ${animal.animal_name}, Scientific: ${animal.scientific_name}`))
console.log(animalNames)

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

// const lowerCase = [];

// function getLow(arry){
//   lowerCase.push(arry.animal_name.toLowerCase())
// }

// zooAnimals.map(getLow)
// console.log(lowerCase); 

var lowerCase = zooAnimals.map(animal => animal.animal_name.toLowerCase())
console.log(lowerCase)

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
// const lowerPopulation = [];

// function howMany(arry){
//   if(arry.population < 5){
//     lowerPopulation.push(`the ${arry.animal_name} has a population of ${arry.population}`)
//   }
// }

// zooAnimals.filter(howMany)
// console.log(lowerPopulation);

var lowerPopulation = zooAnimals
  .filter(animal => animal.population < 5)
  .map(animal => animal.animal_name)
console.log(lowerPopulation)

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
// const populationTotal = 0;


// function thatPop(total, arry) {
//   return (total + arry.population)
// }

// const populationTotal = zooAnimals.reduce(thatPop, 0)
// console.log(populationTotal);

var populationTotal = zooAnimals.reduce((total, animal) => total + animal.population, 0)
console.log(populationTotal)

