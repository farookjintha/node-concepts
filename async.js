// setTimeout(() => {
//     console.log("Hello World");
// }, 5000)

// const hello = "Hello"
// console.log('Welcome....')
// console.log(hello, ", Farook")
// console.log('How are you!')


let name = 'John';

setTimeout(() => {
    name = 'Ram'
}, 5000);

console.log(name);

// handling asynchronization -> promises (async/await , then().catch() ), callbacks

// Asynchronization -> non-blocking operation or it will not wait for execution to get finish.
// Synchronization -> wait until execution finishes ..... it can be achieved using 1. Promise 2. Callbacks


// JS -> Asynchronous programming language
// Asynchronous -> Non Blocking operations