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

// let id = Symbol('123')
// let customerId = Symbol('123')

// console.log(id === customerId);

// DT of Array is Object, of Object is Object and of Function of Object Function/Function Object
     // DT of Symbol is symbol


// ++++++++++++++ Concept of Memory++++++++++++++++++++

// Stack - All primitive data types are stored in stack memory, 
           // this memory creates a copy of it's stored value for the use by next variable

// let myName = "Rushikesh"
// let yourName = myName // Var yourName creates a copy if== of myName //copied value of original name

// console.log(yourName); // O/p -> Rushikesh //prints copied name
// console.log(myName);   // o/p-> Rushikesh //prints original name

// yourName = "Vrushali" // but when same variable is given new value it stores the new value

// console.log(yourName); // o/p->Vrushali //it will change copied name and not original name
// console.log(myName);   // o/p->Rushikesh // original name stayed as is

// Heap - All Non-primitive/reference DTs are stored in Heap memory, 
          // it points to reference values i.e whatever changes happens..happens in original value itself

let theName = {name: "Rushi"}
let aName = theName

console.log(aName); // o/p->Rushi

aName.name = "Vrushi" // this syntax accesses the name value in object, 
                       // this changed the original value in object i.e {name: "Rushi"}
                         // became {name: "Vrushi"...so it will change both variables
console.log(theName); // o/p->Vrushi
console.log(aName); // o/p -> Vrushi


//Summary :
// 1. Stack keeps the original value as is throughout and just copies the original value 
// for next variable and if next variable is changed..
// it changes the next var only and not original var keeping it as is...
// and it happens same for next changes made

//2. Heap references toward the original value and changes the original value itself if
//  next var is declared to change the original var returning changed value in original var.


