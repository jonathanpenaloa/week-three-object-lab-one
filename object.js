// Problem 1

// Declare a JS object called carThree with
// A property called wheels with a number value
// A property called owner with a string value
// A property called isBroken with a boolean value
// A property called color with a string value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isBroken property
// Use dot notation to read the value of owner
// Create a new variable (not part of the object) called clientIsInterested that has no value.
// Check if car color is blue. If true, set clientIsInterested to true, else false.
// Delete the owner property of carThree.
const carThree = {
    wheels: 4,
    owner: "Jon",
    isBroke: false,
    color: "red",
}
carThree.price = 2000;
carThree["year"] = 2015;
carThree.isBroke = true;

console.log(carThree);

let clientIsInterested = undefined;

const checkCarColor = () => {
    if(carThree.color != "blue") return false;
    else {
        return true;
    }
}

console.log(checkCarColor());




// Problem 2

// Declare a JS object called store with
// A property called profit with a number value
// A property called manager with a string value
// A property called isOpenNow with a boolean value
// A property called isVeryExpensive with a boolean value
// Use dot notation to add a new property called location with a string value
// Use bracket notation to add a new property called storeType with a string value
// Use dot notation to change the value of the isOpenNow property
// Use dot notation to read the value of isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
// Delete the profit property of store.

const store = {
    profit: 30000,
    manager: "Jon",
    isOpenNow: true,
    isVeryExpensive: false,
}

store.location = "Seattle";

store["storeType"] = "Food";

store.isOpenNow = !store.isOpenNow;

console.log(store.isVeryExpensive);

let canShopHere = undefined;
console.log(store);

const checkStoreStatus = (openNow, expensive) => {
    if(openNow === true && expensive === false) canShopHere = true;
    else {
        return false;
    }
}

// console.log(checkStoreStatus(store.isOpenNow, store.isVeryExpensive));

// Problem 3

 

// Declare a JS object called home with
// A property called rooms with a number value
// A property called bathrooms with a number value
// A property called isForSale with a boolean value
// A property called isInGoodLocation with a boolean value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isForSale property
// Use dot notation to read the value of bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
// Delete the isForSale property of home.
 const home = {
    rooms: 4,
    bathrooms: 2,
    isForSale: true,
    isInGoodLocation: true,
 }
 home.price = 500000;
 home["year"] = 2015;
 home.isForSale = !home.isForSale;
 console.log(home.bathrooms)

 let buyHouse = undefined;

 if(home.isForSale && home.isInGoodLocation) {
    buyHouse = true;
 } else {
    buyHouse = false;
 }

 delete home.isForSale;

 console.log(home);

// Problem 4, 5, 6

// Declare a JS object with 4 properties (4 keys and 4 values).
// Use dot notation to add a new property.
// Use bracket notation to add a new property.
// Use dot notation to change the value of one of the properties.
// Use dot notation to read the value of one of the properties.
// Create a new variable (not part of the object) that has no value.
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
// Delete one of the object properties.

const student = {
    name: "JON",
    age: 32,
    grade: 90,
    isOnTime: true,
}

student.canCode = false;

student["finshedHomeWork"] = true;

student.grade = 100;

student.age;

let goingOnVaction = undefined;

if (student.grade > 80 && student.isOnTime) return goingOnVaction = true;

delete student.name
console.log(student)