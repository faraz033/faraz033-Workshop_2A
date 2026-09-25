// var name = "Faraz Farooqui ";
// var id = "2503215300072";
// var branch = "AIML";
// var department = "Btech";

// console.log(name);
// console.log(id);
// console.log(branch);
// console.log(department);

/*Check even odd */
// var n = 20;

// if (n % 2 == 0) {
//     console.log("Number is even");
// }
// else {
//     console.log("Number is odd");
// }

/*Percentage*/

// function totalMarks(math, english, science){
//     return math + english + science;
// }
// function percentage(total){
//     return (total / 300) * 100;
// }
// var total = totalMarks(45, 77, 57);

// console.log("Total Marks =", total);
// console.log("Percentage =", percentage(total) + "%");

// console.log("\n==== Array ====");

// let arr = [10,20,30,40,50];

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     sum += arr[i];
// }
// console.log("Sum = ", sum);

// console.log("\n==== 2D Array ====");

// let students = [
//     ["Faraz Farooqui", "Age = 20", "Marks = 85"],
//     ["Arush Dixit", "Age = 18", "Marks = 91"],
//     ["Atharva Rai", "Age = 19", "Marks = 89"]
// ];

// for(let i = 0; i < students.length; i++){
//     for(let j = 0; j < students[i].length; j++){
//         console.log(students[i][j]);
//     }
// }

// console.log("\n==== Object ====");

// const student = {
//     id:101,
//     name:"Faraz",
//     course:"Node.js"
// };
// console.log(student);

// console.log(student.name);

// console.log("\n==== Array of Object ====");

// const user = [
//     {
//         id:101,
//         name:"Faraz"
//     },

//     {
//         id:102,
//         name:"Arush"
//     },

// ]
// for(let i = 0; i < user.length; i++){
//     console.log("Id = ", user[i].id);
//     console.log("Name = ", user[i].name);
// }

// console.log("\n==== Object method====");

// const employee = {
//     id:101,
//     name:"Faraz",
//     department:"AIML",

//     display: function(){
//         console.log("ID =", this.id);
//         console.log("Name =", this.name);
//         console.log("Department =", this.department);
       
//     }
// };

// employee.display();

console.log("\n==== Add Delete object property ====");

let student = {

    name:"Faraz",
    age:20
}

console.log(student);

student.course = "Btech";
console.log(student);

delete student.age;
console.log(student);

