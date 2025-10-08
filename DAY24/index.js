// Execution Context
// Memory allocation
// a = 10
// b = 20
// addNumber = fnCode
// sumResult1 = undefined
// sumeResult2 = undefined

// Execution phase
// console.log(a);
// var a = 10;
// var b = 20;
// // console.log(a);

// // var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// // var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// // console.log(sumResult1,sumResult2);



// let const 
//Memory allocation
//a = <unintilization>  {Temporal dead zone }
//b = <unintilization>  {Temporal dead zone }
//Execution pahase 
//a=10
//b=20
//10

// console.log(a);  //>>Error acnnot acess a befor intiization
// let a = 10;
// const b = 20;
// console.log(a);





// let const 
//Memory allocation
//a = <unintilization>  {Temporal dead zone }
//b = <unintilization>  {Temporal dead zone }
//addNumber =  <unintilization>  {Temporal dead zone }
//result = <unintilization>  {Temporal dead zone }
//

//Execution
//a = 10
//b = 20
//addNumber = fnCode
//fnCode is Running
// sum = 30
//Print 30

let a = 10;
const b = 20;

const addNumber = function (num1 ,num2)
{
    const sum = num1 + num2;
    return sum;
}

// console.log(a,b);
const result =  addNumber(a,b)
console.log(result);

//console .log is not part of javascript
