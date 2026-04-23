"use strict"; // whatever code we write will be considered as newer version

// alert(3+3) // this is available in browser console, but written in
           // different format or syntax in JS (node supported)

// Data Types
// Primitive Data Types
// string => text/text+number+anything within " "
// number = > number, 2 to power 53
//bigint => bigger number than number eg/ stock market etc.
// boolean => true/false
// null => standalone value; it's an object

console.log(typeof null) //DT is object
// undefined => let state; (no state defined); DT is undefined

console.log(typeof undefined)

// object =>


// Non primitive data types (Reference DTs) : Array, Objects, Functions

// const arrayValue = ["Rushikesh", 234, "Barwade"] // Array

// const objectValue = {            // Objects

//     name: "Rushikesh",
//     age: 23

// }

// const functionValue = function(){     // Functions

//     a: "Rushikesh",
//     number = 1224567
// }

let id = Symbol('123')
let customerId = Symbol('123')

console.log(id === customerId);

// DT of Array is Object, of Object is Object and of Function of Object Function/Function Object
     // DT of Symbol is symbol