console.log("==== Object ====");

// const a = {
//     id: 101,
//     name: "Faraz",
//     show: function(){
//         console.log("My id id:"+ this.id);
//         console.log("My name:" + this.name);
//     }
// };

// let c = {
//     age: 20,
//     job: "Teacher",
//     show: function(){
//         console.log("My age is:"+ this.age);
//         console.log("My name:" + this.name);
//     }
// };

// const a = {
//     name: "Faraz",
//     sal: 15000,
//     display: function(){
//         console.log("This is my name:" + this.name);
//         console.log("This is my salary:" + this.sal);
//     },
//     increaseSal: function(){
//         this.sal = this.sal + 5000;
//     }
// };
// a.display();
// a.increaseSal();

// let d = {
//     name: "Faraz",
//     marks: 87,
//     addMarks: function(){
//         this.marks = this.marks + 5;
//     },
//     display: function(){
//         console.log("Name:" + this.name);
//         console.log("Marks:" + this.marks);
//     }
// };
// d.addMarks();
// d.display();

// function show(){
//     console.log("My address"+this.address);
//     console.log("My city"+this.city);
// }
// e = {
//     address: "ABES College",
//     city: "Ghaziabad",
//     show: show
// };
// f = {
//     address: "Crossing",
//     city: "Noida",
//     show: show
// };

// e.show();
// f.show();

function college(){
    console.log("Name: " + this.name);
    console.log("ID: " + this.id);

    console.log("Class Name: " + this.class_name);
    console.log("Class ID: " + this.class_id);
    
}
dep = {
    name: "Faraz",
    id: 202,
    college: college
};
clas = {
    class_name: "AIML",
    class_id: 1,
    college: college
};

dep.college();
clas.college();