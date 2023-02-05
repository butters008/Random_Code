/*
This is going to be covering the basic logic of JS, I want to do more programming in JS to better myself
when I try and tutoring and any freelance work I might try and take this year.

NOTE: This is not going to be connect to node.js or express since I want to focus on who to I get data from 
the web, if I am going to pull data from a DB than I will work on that seperately.
*/

//All of these results will be printed out to the console


//conole.log will print out whatever you want also, this is comment aka end of line comment
console.log("Hello World!") //because you can do this without affecting the code!

/* 
This is a block comment, you do not need to put // for each line, however, everything (including code) will be commented out and
will no longer be able to run
*/

/*
Variables

Vairables is one the basic fundamentals to any type of programming, whether that is web, OOP, or functional.  The idea and use case of variables
will be the same accross all programming languages but the implementation and specifics of certian type of variables will be different from
language to language.

There are two type of vars, let and const (technically there is var, but that is no longer used) and there is a difference between the two type
of vairables.  when you assign something to a const, it is constant and there cannot be another variable/value assigned to that const.  
We write functions in const, but that will be explained more in that section. The other type is let, and these are the vars if you need values 
or other vars assigned to this let, it can be overridden.

Variables can hold different values; int(whole numbers), floats(numbers with decimals), strings(words in ""), and boolean (true or false)

Note: There cannot be two of the same let vars as well
*/

const int = 3
const float = 3.5
const string = "This is a string"
const boolean = false //can be assigned as true as well

const trueName = "My name is Keith"
let nickNameYoung = "My name is turd"
let nickNameOld = "My name is butters"

//This errors out - as expected
// trueName = nickNameYoung
// console.log(trueName)

//Prints out "My name is turd"
nickNameOld = nickNameYoung
console.log(nickNameOld)

//You can have things happen even though this is a const
const addNumbersInOneVar = 5 + 9 + 10
console.log(addNumbersInOneVar)

//TO really mess with you, what result do you think these should be, before the you try to think about these?
const messedUpVar1 = "3" + 4 + 5 
const messedUpVar2 = "3 + 4 + 5"
const messedUpVar3 = 5 / "5"
const messedUpVar4 = messedUpVar1 + messedUpVar2

//Answers
console.log(messedUpVar1) //String
console.log(messedUpVar2) //String
console.log(messedUpVar3) //Number - yeah weird I know...
console.log(messedUpVar4) //String

/*
methods (aka functions)

Methods and functions are the samething, however, the poper thing to call these are methods. Method is another fundamental of programming
no matter what language or type of programming that you do.  Again, the same as variables the concept of methods will be the same regardless,
but the execution and implementation of methods vary from language to language. 

There are two ways (and maybe more) ways to implement methods in JavaScript.
*/

//Arrow method (most people say arrow function)
const basicMethodArrow = () => {
  console.log("Inside Arrow Function")
}

//using the function keyword
function basicMethod() { 
  console.log("Inside method using function keyword")
}

//You have to call the method to execute them
basicMethod()
basicMethodArrow()

/* 
Loops

There are a few different types of loops within the programming sphere.  However, within this file we are only going to focus on two types of loops.
The for loop and the while loop.  The most common type of loop, in my opinion, would be the for loop.  For loops will be easier to implement, 
test, and preferred for reading through arrays.
*/

let valueToBeAddedInLoop = 5
for (let i = 0; i < 5; i++) { 
  valueToBeAddedInLoop *= 2
  console.log("In Loop result " + valueToBeAddedInLoop)
  console.log("incrementor " + i)
}

console.log(valueToBeAddedInLoop)

let stopWhileLoop = false
let countToZero = 5
while (!stopWhileLoop) { 
  console.log("Inside the while loop")
  countToZero--
  if (countToZero == 0) {
    console.log("Stopping the while loop")
    stopWhileLoop = true
  }
}

console.log("Outside the while loop")