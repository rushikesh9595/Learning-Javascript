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
console.log(stringInNumber); // shows number 12345 only
console.log(typeof stringInNumber); // when asked for type it shows string DT


