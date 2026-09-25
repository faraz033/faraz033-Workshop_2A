//Experiment-1

// const Event = require("events");
// const A = new Event();

// A.on("greet", (name) => {
//     console.log(`Hello Sec A ${name}`);
// });

// A.on("exit", () => {
//     console.log("Exiting the program...");
// });

// A.emit("greet", "AIML-A");
// A.emit("exit");

// class Button extends Event {
//     click() {
//         console.log("Button was clicked");
//         this.emit("click", "Button has been clicked");
//     }
// }

// const button = new Button();

// button.on("click", (event) => {
//     console.log(`Button event has click: ${event}`);
// });

// button.click();

// console.log("Start");
// setTimeout(() => {
//     console.log("setTimeout");
// }, 2000);

// setImmediate(() => {
//     console.log("setImmediate");
// });

// process.nextTick(() => {
//     console.log("nextTick");
// });

// console.log("End");

//Experiment-2

const fs = require("fs");

fs.writeFile("std.txt", "Name: Faraz", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");

    fs.appendFile("std.txt", "\nAge: 20", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File has been updated");

        fs.readFile("std.txt", "utf8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File has been read");
            console.log("File content:");
            console.log(data);

            fs.unlink("std.txt", (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("File has been deleted");
              }
            });
          }
        });
      }
    });
  }
});