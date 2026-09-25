// console.log("===Variables===")

// var First_name = "Faraz";
// var Last_name = "Farooqui"
// console.log(First_name);
// console.log(Last_name);

// var a = 20;
// var b = 30;
// if(a>b){
//     console.log("a is greater , value of a = " , a);
// }
// else{
//     console.log("b is greater, value of b = ", b);
// }

// console.log("==Function==");

// function abes(){
//     console.log("Welcome students");
//     console.log("Welcome to Node.js");
// }

// abes();

// console.log("==Function with parameters==");

// function greet(Fname,Lname){
//     console.log("Hello",Fname,Lname);

// }

// greet("Utkarsh","Dixit");
// greet("Waseem", "sir");

// console.log("==Function Return==");

// function add(x,y){
//     return x+y;

// }

// var result = add(20,30);
// console.log("Sum = ", result);

// console.log("==Default Arguments==");

// function fullName(Fname = "ABES",Lname = "Engineering College"){
//     return Fname + " " + Lname

// }

// console.log(fullName());
// console.log(fullName("Faraz ", "Farooqui"));

console.log("\n=== Percentage ===");

function totalMarks(math, english, science){
    return math + english + science;
}

function percentage(total){
    return (total / 300) * 100;
}
var total = totalMarks(80, 75, 90);

console.log("Total Marks =" , total);
console.log("Percentage = ", percentage(total + "%"));