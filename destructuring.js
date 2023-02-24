const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//randomCar == Tesla
//otherRandomCar == Mercedes
//EXPLANATION =>
//randomCar represents the first index by default, and the comma allows us to skip an index

console.log(randomCar)
console.log(otherRandomCar)

//<--------------------------------------------------------->//

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//name == Undefined
//otherName == Elon
//EXPLANATION => 
//the colon redirects the VALUE of (name) to be held in the VARIABLE (othername) 

console.log(name); //<= throws an error "name is not defined"
console.log(otherName);

//<--------------------------------------------------------->//

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//password == '12345'
//hashedPassword == Undefined
//EXPLANATION => 
//password exists outside the person object (as a const) so we just call on that with the log
//since password doesn't exist in the person object, we cannot specify a value, especially since it is a const OUTSIDE the object

console.log(password);
console.log(hashedPassword);

//<--------------------------------------------------------->//

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers;

//False
//True
//EXPLANATION =>
//The commas act as operators to skip indexes'

//these will be Boolean values as the comparative operator is used
console.log(first == second);
console.log(first == third);

//<--------------------------------------------------------->//


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

//value
//[1, 5, 1, 8, 3, 3]
//1
//5
//EXPLANATION =>
//the last one works because we have already sestructured second key and now have access to it

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

