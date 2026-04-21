const accountId = 12345566 // this variable locks the value permamnently in memory named accountId
                        //  you cannot change the value later

// accountId = 109876 - not allowed
console.log(accountId);

let accountEmail = "rushibarwade@gmail.com" // temporary variable and can be overridden like below

accountEmail = "rb@rb.com" //not mentioning let or var is not preferred way to assign memory

var accountPassword = "12345" // preferred not to be used due to issues in block and functional scopes

accountPassword = "1234567890" // memory assigned but not any variable, overrides previous one

accountCity = "Kolhapur"

accountCity = "Ichalkaranji" // overrides the previous memory name

let accountState; //; can or cannot be used -  its okay, no value assigned to this variable memory space - output given is undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])





