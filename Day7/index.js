//without constructor
// class A{
//     name;
//     name = "Faraz";
//     show(){
//         console.log("My name is " + this.name);
//     }
// }
// let obj = new A();
// obj. show();

// //with constructor
// class AA {
//     constructor(name) {
//         this.name = name;
//         console.log("My name is " + this.name);
//     }
// }

// let a = new AA("Faraz");

// class student{
//     constructor(name, RollNo, Address, MobileNo){
//         this.name = name;
//         this.RollNo = RollNo;
//         this.Address = Address;
//         this.MobileNo = MobileNo;

//         console.log("Name:" + this.name);
//         console.log("Roll No:" + this.RollNo)
//         console.log("Address:" + this.Address)
//         console.log("Mobile No:" + this.MobileNo)
//     }
// }
// let s = new student();
// let s1 = new student("Faraz", 72, "Ghaziabad", 9369202839);
// let s2 = new student("Arush", 41, "Kanpur", 8574454444);
// let s3 = new student("Anivaran", 27, "Ghaziabad", 9575754444);
// let s4 = new student("Amaan", 24, "Ghaziabad", 7573254444);
// let s5 = new student("Aakshat", 20, "Ghaziabad", 9574459844);

//static member and function
// class Hello{
//     static name = "Example of static variable and method";
//     static show(){
//         console.log("Hello class this is " + Hello.name);
//     }
// }
// Hello.show();

// //static method with variable
// class Hello1{
//     static name = "Example of static method";
//     static show(){
//         console.log("Hello class this is " + Hello1.name);
//     }
// }
// Hello1.show();

// class Hello2{
//     static name = "Example of static method with instance variable";
//     constructor(){
//         this.instanceVar = "Instance variable";
//     }
//     show(){
//         console.log("Static variable " + Hello2.name);
//         console.log("Instance variable " + this.instanceVar);
//     }
// }
// let h2 = new Hello2();
// h2.show();

// //static method
// class student1 {
//     static name = "Faraz";
//     static lastname = "Farooqui";

//     show() {
//         console.log(`First Name: ${student1.name}`);
//         console.log(`Last Name: ${student1.lastname}`);
//     }
// }

// let obj = new student1();
// obj.show();

//University student1 management system
class Student {
    static totalStudents = 0;

    constructor(name, RollNo, Marks) {
        this.name = name;
        this.RollNo = RollNo;
        this.Marks = Marks;

        Student.totalStudents++;

        console.log("Name: " + this.name);
        console.log("Roll No: " + this.RollNo);
        console.log("Marks: " + this.Marks);
    }

    show() {
        if (this.Marks >= 40) {
            console.log("Passed");
        } else {
            console.log("Failed");
        }
    }

    static showTotalStudents() {
        console.log("Total students: " + Student.totalStudents);
    }
}

let s1 = new Student("Faraz", 72, 83);
s1.show();

let s2 = new Student("Arush", 41, 85);
s2.show();

let s3 = new Student("Anivaran", 27, 87);
s3.show();

Student.showTotalStudents();

//Bank Account Management system
class BankAccount {
    constructor(name, number, initialBalance) {
        this.accountHolder = name;
        this.accountNumber = number;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Amount deposited successfully.");
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount.");
        } 
        else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } 
        else {
            this.balance -= amount;
            console.log("Amount withdrawn successfully.");
        }
    }

    displayBalance() {
        console.log("Account Holder: " + this.accountHolder);
        console.log("Account Number: " + this.accountNumber);
        console.log("Current Balance: " + this.balance);
    }
    static bankInfo(){
        console.log("Bank Name: ABC Bank"); 
        console.log("Bank Type: Private Bank"); 
        console.log("Banking services available 24/7.");
    }
}

let account = new BankAccount("Faraz", 12345, 5000);

account.displayBalance();

console.log("\nDepositing");
account.deposit(2000);

console.log("\nWithdrawing");
account.withdraw(1500);

console.log("\nFinal Account Details:");
account.displayBalance();

BankAccount.bankInfo();