// non blocking vs blocking code. one line of code runs at a time
/*
console.log("Start of sync code");

let sum = 0;

for(let i =0; i< 100000000; i++){
    sum += i;
}
console.log("Sum: " + sum)

console.log("End of sync code");
*/
console.log("Start of Async code"); // run piece of code on a delay

setTimeout(() => {
    console.log("Async task complete");
}, 2000);
console.log("End of Async code");

// let person = {
//     name:"Alice",
//     age: 30,
//     isStudent: false,
//     hobbies: ["reading","writing"]

// };
 let jsonString = '{ "name":"Alice","age": 30,"isStudent": false}';
    let personObject = JSON.parse(jsonString);
    console.log(personObject.age);


    function printMessage(){
        console.log("Hello this is your callback speaking")
    }
    printMessage()

    function greetUer(callback){
        console.log("GreetUser...");
        callback();
    }
    greetUer(printMessage);


    const myPromise = new Promise((resolve, reject) => {
        const success = true; // Change this to false to trigger the reject case
        if (success) {
        resolve("The operation was successful!"); // Call resolve if the operation is successful
        } else {
        reject("The operation failed!"); // Call reject if the operation fails
        }
    })
        // Handling the promise
        myPromise
         .then ( (message) => {
        console. log("'Success:" + message);
        })
        .catch((error) => {
        console. log("Error: " + error);
    });