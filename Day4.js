// console.log("==== String object ====");

// let name = "Faraz";
// console.log(name);

// console.log("Length =",name.length);

// console.log("==== String methods ====");

// let str = "Welcome Javascript";
// console.log("Upper case =", str.toUpperCase());
// console.log("Lower case =", str.toLowerCase());

// console.log("Character at index 3 =", str.charAt(3));

// console.log("Index of Java =", str.indexOf("Java"));

// // lastindex
// let message = "Javascript is easy. Javascript is powerful";

// console.log(
//     "Last index =",
//     message.lastIndexOf("Javascript")
// );

// // slice
// console.log(
//     "Slice =",
//     str.slice(0,7)
// );

// // Split
// let data = "HTML,CSS,JavaScript";

// let result = data.split(",")

// console.log("Split =", result);

// // Replace
// let text = "I love Java";

// console.log(
//     text.replace("Java", "JavaScript")
// );

// // concat
// let first = "Faraz";
// let last = "Farooqui";

// console.log(
//     first.concat(" ", last)
// );

// // Include method
// let course = "JavaScript";

// console.log(
//     course.includes("Script")
// );

// Array Object
// console.log("==== Array Object ====");

// let numbers = [10,20,30,40,50];

// //Acces array elements
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[3]);

// //Array methods
// numbers.pop();
// console.log("After pop =", numbers);

// //Unshift
// numbers.unshift(5);
// console.log("After unshift =", numbers);

// //shift
// numbers.shift(5);
// console.log("After shift =", numbers);

// console.log("==== Date Object ====");

// let date = new Date();

// //Get date
// console.log(
//     "Date =",
//     date.getDate()
// );

// // Get Month
// console.log(
//     "Month =",
//     date.getMonth()
// );

// //Get full year
// console.log(
//     "Year =",
//     date.getFullYear()
// );

console.log("==== Math Objects ====");

console.log("PI =", Math.PI);

console.log("Maximum =", Math.max(5,6,2,4,7));

console.log("Minimum =", Math.min(5,6,2,4,7));

console.log("Round =", Math.round(4.7));    

console.log("Floor =", Math.floor(4.7));    

console.log("Ceil =", Math.ceil(4.1));     

console.log("Square Root =", Math.sqrt(16));  

console.log("Power =", Math.pow(2, 3));     

let arr = [10,20,30,40,50];
console.log("Maximum =", Math.max(...arr));



