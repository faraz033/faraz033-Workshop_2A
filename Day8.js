// class Employee {
//    constructor(id, name, basicSalary) {
//       this.id = id;
//       this.name = name;
//       this.basicSalary = basicSalary;
//    }

//    calculateSalary() {
//       return this.basicSalary;
//    }
// }

// class Manager extends Employee {
//    constructor(id, name, basicSalary, incentive) {
//       super(id, name, basicSalary);
//       this.incentive = incentive;
//    }

//    calculateSalary() {
//       return this.basicSalary + this.incentive;
//    }
// }

// const employee = new Employee(1, "Faraz", 30000);
// const manager = new Manager(2, "Manager", 50000, 10000);

// console.log("Employee Salary:", employee.calculateSalary());
// console.log("Manager Salary:", manager.calculateSalary());


// call back function
// function greetuser(name, callBack) {
//     console.log("Hello " + name);
//     callBack();
// }

// greetuser("Bob", function() {
//     console.log("This is the callback function");
// });

printName();

console.log("Welcome");
function printName(){
    setTimeout(()=>{
    console.log("Faraz");
}, 2000);
}

function prom(complete){
    return new Promise(function(resolve, reject){
        
    })
}