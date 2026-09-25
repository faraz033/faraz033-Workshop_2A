const Event = require('events');
const A = new Event();
A.on('greet', (name) =>{
    console.log(`Hello Sec A ${name}`);
})
A.emit('greet', 'AIML-A');