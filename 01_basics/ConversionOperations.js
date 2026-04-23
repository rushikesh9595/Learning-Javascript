// Converting one DT to another DT

let score = "33" //sometimes user might log in score in string 
                 // but developer needs to work on number inside it

//console.log(typeof score); //1 (1st output)


//let ValueInNumber = Number(score) // value in string is number, converted to Number, N is capital
// console.log(typeof ValueInNumber); //2 (2nd output)

let value = "5a5b5c"

let ValueInNumber = Number(value)
//console.log(ValueInNumber); // 4th output ....converted but it's "not a number"= NaN//take care

// if score = null ....output is 0
// if score = undefined....output is NaN, the DT is still number only
// if score = true....output is 1


//Boolean Coversion

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); 


// but when we use
// "" => false...empty string
// "rushikesh" => true

let someNumber = 12345

let stringInNumber = String(someNumber) // converts to string
// console.log(stringInNumber); // shows number 12345 only
// console.log(typeof stringInNumber); // when asked for type it shows string DT


//**************Operations****************

let Value = 2345
let negValue = -Value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3); // it gives reminder for 2/3 and reads 2 modulus 3

// console.log("Hello" + " Rushikesh");

// console.log("1"+2); //o/p will be string 12
// console.log(1+"2"); // o/p will be number 12
// console.log("1"+2+3); // output will be string as 123
// console.log(1+2+"3"); // output will be number as 33

// let gameCounter = 100
// gameCounter++
// console.log(gameCounter); // o/p is 101

// let gameCounter = 100
// ++gameCounter
// console.log(gameCounter); // o/p is 101


// let x = 5
// y = x++

// console.log({x}, {y});

// let x2 = 3n;
// const y2 = x2++;   // x2 is 4n; y2 is 3n

// let a = 5
// b = ++y

// console.log({a}, {b});

// let x2 = 3n;
// const y2 = ++x2;  // // x2 is 4n; y2 is 4n

// let x = 3;
// const y = x++;  //If used postfix, with operator after operand (for example, x++),
//              //   the increment operator increments and returns the value before incrementing.

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;  //If used prefix, with operator before operand (for example, ++x),
//               // the increment operator increments and returns the value after incrementing.

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

// link to study : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
