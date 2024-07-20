let score = "33abc"
//if above number 33 is written in double quote then it will display string in terminal.
//if we set the value of score is null then it will give o/p as (zero)0.
//if we set value undefined then it will give o/p as NaN [Not as Number]
//if we set value boolean then it will give o/p as true/false [1/0]
//if we set value as string like "any name" then it will give o/p as NaN [Not as Number]



/*const {score} = req.body */    //this does not guarantee that the value is string or not


//console.log(typeof score);
//console.log(typeof (score)); //here the method is called parenthesis ke andar 


let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // for this if we write 33(number) with any alaphabet then also in terminal it will give output as number

//console.log(valueInNumber);

// "33"  => 33
// "33abc" => NaN
// true => 1; false => 0


//let isLoggedIn =1  [value for this is true]
//let isLoggedIn =""  [value for this is false]
//let isLoggedIn ="Gopal"

//let booleanIsLoggedIn = Boolean (isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true; 0 =>false
// "" => false
// "Gopal" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));