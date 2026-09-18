// let details = {
//     name: "Faraz",
//     marks: 80,
//     grade: 'A',

//     upgradeGrade: function() {
//         this.grade = this.grade + '+';
//     },

//     display: function() {
//         console.log("Name: " + this.name);
//         console.log("Marks: " + this.marks);
//         console.log("Grade: " + this.grade);
//     }
// };

/* Rest Operator */

// details.upgradeGrade();
// details.display();

// function add(...numbers){
//     console.log(numbers);
// }
// add(10,20,30,40);

// function sum(...nums) {
//     let total = 0;

//     for (let num of nums) {
//         total += num;
//     }

//     console.log("Sum =", total);
//     return total;
// }
// sum(10, 20, 30, 40);

function sum(name, ...args) {
    let total = 0;

    for (let i of args) {
        total = total + i;
    }

    console.log("hello " + name);
    console.log("total =", total);

    return total;
}

sum("Faraz", 10, 20, 30, 40);