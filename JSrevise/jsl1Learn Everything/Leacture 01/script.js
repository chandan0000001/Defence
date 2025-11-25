//write a function getGrade(score) that 
// takes a student marks (0 to 100)
// REturens the grade based on this logic 
// 90-100 A+
// 80 - 89 A
// 70 - 79 B
// 60 -69 C=
// 33 - 59 D
//0 -32 Faill
// anything else Invalid marks or input 


// function getGrade(score){
//     if (score >= 90 && score <=100){
//         return "A+";
//     }
//     else if (score >=80 && score <= 89){
//         return "A";
//     }
//     else if (score >=70 && score <=79){
//         return "B"
//     }
//     else if(score >=60 && score <= 69){
//         return "C";
//     }
//     else if (score >= 33 && score <= 59){
//         return "D";
//     }
//     else if (score >= 0 && score <=32 ){
//         return ("Fail");
//     }
//     else {
//         return "Invaild Marks";
//     }
// }



// console.log(getGrade(90));






// function getGrade(score){
//     if (score >= 90 && score <=100) return "A+";
//     if (score >=80 && score <= 89)  return "A";
//     if (score >=70 && score <=79)    return "B";
//     if(score >=60 && score <= 69) return "C" ;
//     if (score >= 33 && score <= 59)  return "D";
//     if (score >= 0 && score <=32 ) return "Fail";
//     return "Invailed Marks" ;
// }


// console.log(getGrade(90));



//Rock paper scissor Logic 
// function rps(user , computer){
//     if (user === computer) return "Draw";
//     if (user === "rock" && computer === "scissor")   return "user win";
//     if (user === "scissor" && computer === "paper")   return "user win";
//     if (user === "paper" && computer === "rock")   return "user win";
//     return "computer win"
// }

// console.log(rps("Paper" , "Scissor"));



// for (let i = 1 ; i <= 50 ; i++ ){
//     console.log(i);
// }



// let i = 1; 
// while ( i <33 ){
//     console.log(i);
//         i ++;
// }


// let i = 1;
// do {
//     console.log(i);
//     i++
// }
// while ( i < 98);

// for (let i =1 ; i <890 ; i++){
//     console.log(i);
//     if (i === 32 ){
//         break;
//     }
// }
// for (let i =1 ; i <66 ; i++){
    
//     if (i === 32 ){
//         continue;
//     }
//     console.log(i);
// }



// for (let i = 1 ; i <=10 ; i++){
//     console.log(i);
// }


// for (let i = 10 ; i >=1 ; i--){
//     console.log(i);
// }



// for (let i = 1 ; i <=20 ; i++){
//     if (i%2===0) console.log(i) ;
    
// }



// let i = 1 
// while (i <= 15){
//     if (i % 2 != 0) console.log(i);
//     i++;
// }


//multpication table ]
// let value = 5 ;
// let i = 1 ;
// while (i <= 10){
//     console.log(  `${value}` +"*"+ `${i}`  + "="+ (value * i));
//     i++;
// }


// let sum =0;
// for (i = 1 ; i<= 100 ; i++){
//     sum = sum + i;
// }
//      console.log(sum);



// for (let i = 1 ; i <=50 ; i++){
//     if (i%3===0) console.log(i) ;
    
// }



// let x = prompt("give a number ");
// for (let i = 1 ; i <= x ; i ++){
//     if (i%2===0){
//         console.log(`${i} is even`);
//     }
//     else {
//         console.log(`${i} is odd`);
//     }
// }


// for (let i = 1 ; i <= 100 ; i++){
//     if (i%3=== 0 && i % 5 === 0){
//         console.log(i);
//     }
// }




//1 stop at first Multip;ae of 7 
//write a loop 1 o 100 
// Pnt Each number 
// Stops completetly when It  finds the first number is dic=visible by 7 

// for (let i = 1 ; i <= 100 ; i ++){
//     console.log(i);
//     if (i % 7 === 0 ){
//         break;
//     }
    
// }


// skip multiples of 3 
// wriite a loop from (1-20)
//skip number divisibke by 3 
//  print all other 
//use countinue
// 

// for (let i = 0 ; i <=20; i++ ){
//     if (i % 3 === 0  ) continue;
//      console.log(i);
// }


// Create loop  loop 1 to 100  Print first 5 odd number yhen stp loo-p 
// use both if , countinue , counter + break 

// let counter = 0 ;
// for (let i = 0 ; i <= 100 ; i ++){
//     if (i%2 != 0){
//         counter++ ;
//         console.log(i);
//     } 

//     if (counter === 5 )break; 
// }


// count how many number  {let num = 4567890};

// let num = 345678;
// let  count = 0 ;
// while (num > 0 ){
//     count ++ ;
//     num = Math.floor(num/10);  //Math.floor remove that after point 
// }
// console.log(count);




//Function


// function dance (){
//     console.log("DFGHJK");
//     console.log("DFGHJK");
//     console.log("DFGHJK");
//     console.log("DFGHJK");
//     console.log("DFGHJK");
// }
// dance();
// dance();
// dance();
// dance();
// dance();


//Function Declaration 
// function lolo (){
//     console.log("Happy New year");
// }
// lolo();


//fnc expression
// let fnc = function (){
//     console.log("dfghjk");
// }
// fnc ();

// fat arrow func
// let fnc = ()=> {
//        console.log("Hello")
// }
// fnc();


// function print (v1){

//     console.log(`${v1} nachh rahah he `);
// }
// print("Ghoda");
// print("Hiran");
// print("Dinasor");
// print("pENGUIEN");

// function add (v1 , v2){
//   console.log(`${v1+v2}`)
// }
// add(1,2)
// add(2511,24)
// add(2511,2445)


//Default reasrt parameters 
// function add (v1 = 0 , v2 = 0 ){
//     console.log(v1,v2)       //Undefinedd Undefined 
//     console.log(v1+v2)       //NaN 
// }

// add(1,2);

//Jab user multiple bheje de to then we use spread or rest operator to handle that case >> // ...val
//... function ke parameter space main lage to wo rest operator and aray and object pe lage to wo spread operator 
// function abcd (...val){
//     console.log(val);  
// }
// abcd (1,2,3,4,5,6,7,8,9,10);

// function abcd (a,b,c,...val){
//     console.log(a,b,c,val);  
// }
// abcd (1,2,3,4,5,6,7,8,9,10);



//Return and Early returns 
//Ja ha se aye hoo waha pe dalldunga 
// function abcd (v){
//     return 12+v;
// }
// let val = abcd (45);
// console.log(val);






//First class function 
//We can treat function as a variable
// function abcd (val){
//     val();
// }
// abcd (function(){
//      console.log("Hello  ");
// })




//High oder function 
//which return function or apcet the function as a parameter
// function abcd (val){
//   return function (){
//     console.log("Hello");

//   }
// }
// abcd() ()



// //pure vs inpure function 
// // A function does not change anything outside it is called pure function

// let a = 12 ; 
//   function pure(){
//     console.log("Hii ");
//   }

// // A function that changes something outside it is called impure function
// function impure (){
//     a++;
// }


//closures > ek func jo return kare another func and reurn hone wala func always use kare ga parante func ka func 
// function abcd () {
//     let a = 12;
//     return function(){
//      console.log(a);
//     }
// }
// abcd() ()


//Lexial scoping >>>  below code a acess in abcd b acess in defg and c acess in ghij not from the outside 
// function abcd (){
//     let a = 12 ;
//     function defg(){
//         let b = 13;
//         function ghij (){
//             let c = 14;
//         }
//     }
// }



// IFE (immediately invoked function expression)
// (function(){
//    console.log("Hello from Chandan");
// })();



//Hoisting differenes between declaration and expression 
// abcd();

// function abcd(){
//     console.log("Heyy");
// }



//function expression >> Here Hoisting not allowed 
// efgh();
// let efgh = function (){
//     console.log("Heyuiolfkjnmds");
// }


//what is the difference bwtween function and declaration and expression in terms of hostiong 
// abcd(); //no  eror >> function dclaration 
// function abcd (){
// console.log`HII`}

// gh(); //Error Function Expresssion
// let gh = function (){
//     console.log(`Ho`)
// }



// what is the op 
// greet();
// function greet(){
//     Console.log(`Hello!`);
// }

// greet();
// function greet(){
//     console.log("Hello1");
// }


//convert this fun into fat arrow funcition 
//function multiply (a,b){
// return a*b;
//}

// let multiple = (a,b)=>{
//    return a*b;
// }


//indentify parameters or arrrgumrnt 
//function welcome(name){
// console.log(name) ;
//}
//Wealcome(`CHANDAN`);


//Parameter name 
//Argument chandan




// function sayHi(name = "Chanan"){
//     console.log("Hi",name);
// }
// sayHi();



//What does the ... operator mean in parameter 
// function ab (a,b,...val){
//     console.log(`Hello`);
//     return val;
// }
// let g = ab(1,23,4,4,5,6,87,90,87,75,4,33,22,1,3,45,5,6,787,8,"Chandan" ,true);
// console.log(g);

//use the rest parammeter to accept the any number of scores and return tHe totAL
// function getScore (...score){
//     let total = 0;
//   score.forEach(function(val){
//    total = total + val;
//   })
  
//     return total;
// }
// console.log(getScore(10,20,30,40,50,60));


//Write a function checkAge (age) that return "Allowed" if age is more than 18
// function checkAge (age){
//     if (age , 0)return "to young";
//     return "Allowed";
// }
// console.log(checkAge(3));



// what is the output
// function f(){
//     return ;
// }
// console.log(f());

//what does it mean when we say "Function are first class citizens in JS"?
//Ans : Function can be treated as a variable
//can u assign a function to a variable >> Yes
// let a = function(){

// }
// a();
//Can u pass a function as an argument to another function >> Yes

//Can u return a function from another function >> Yes


//Pass a function into another function and call it
// function abcd (val){
//     val();
// }
// abcd(function (){
//     console.log("Helllo bro ");
// })
//high order function

// convert the below function into a pure function 
// let a = 57;
// function adb (c){
//     c += a;
// }


// let a = 57;
// function adb (c){
//     let e = a; 
//     e+=c;

// }


//WErit  a BMI calculator using function

// function  bmi (weight , height){
//     return weight / (height*height);
// }
// console.log(bmi(68, 123.7).toFixed(2));

// create a reusable discount calculator (HOF)  High ode funcrtion 
// function disountcalculator (discount){
//     return function (price){
//         return price - (price * (discount/100));
//     };
// }

// let discounter = disountcalculator(10);
// console.log(discounter(200));





//closer
// function abcd (){

//     let count = 0;
//     return function (){
//         count++;
//         return count;
//     }
// }

// let c = abcd();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());


// let d = counter();
// console.log(d());
// console.log(d());
// console.log(d());



//Create a pure function to transform a value 
// function double (val){
//   return (val*5)
// }
// console.log(double(5));


//Use IFEE to isolate variables ?>>> Secreate variables private vAriables 
// (function(){
//     const password = "Secreat Password"
//     console.log(password);
// })

// console.log(password);//>>Undefine 

//array methods 
// let arr = [1,2,3,4,5,`Chandan`,true,23,4];
// let marks = [98,89,87,93,99,98,79];
// marks[0]

// let arr = new Array


// let arr = [1,3,4,56,7,8,89,7];;
// arr[2] = 12;
// console.log(arr)


// array method

// let arr = [1,2,3,4,5,6,67,8,88];
// arr.push(890);
// arr.pop(2); >>pop() always removes only the last element, and it ignores any argument you pass.
// arr.shift()  >>Remove first element 
// arr.unshift() add starting value 
// arr.splice(2,2)  //it return new array as a ouput 
// console.log(arr);

// let arr = [11,24,65,67,90];
// let sr = arr.sort(function(a,b){
//     return a - b;
// });

// //a-b >> ascendinng oder b -a decending oder  :""
// console.log(sr);

// let arr = [1,2,3,4,5,6];
// let ans = arr.reduce(function(accumlator , val){
//     return accumlator+val;
// },0)
// console.log(ans);



// let arr = [10,20,30,40,50];
// let va = arr.some(function(val){
//     return val >86;
// })




// let arr = [10,20,30,40,50];
// let ec = arr.every(function(val){
//     return val > 95;
// })



//Destructor on array 
// let arr = [1,2,3,4,5,6,67];
// let [a,b] = arr;


//insert "Red" "Blue" at index 1 
// let color = ["Green","Yellow","Orange"];
// color.splice(0,1,"Red","Blue");


// o/p
// (4) ['Red', 'Blue', 'Yellow', 'Orange']


//spread operator 
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = [...arr];
// arr2.pop();


//crate an arrray with 3 fruits and print the 2nd fruit 
// let fruit = ["apple","Gusvs","orange"]
//add "Mango" at the end and "Pineapple" at the brginning of this array 
// let fruits2 = ["Apple","Banana"];
// fruits2.push("Mango");
// fruits2.unshift("Pinapple")



//Replsce "Bannana" with "Kiwi" in the array 
// let fruits2 = ["Apple","Banana"];
// fruits2.pop() ;
// fruits2.push("Kiwi")



// what is the difference between .push() and .unshift()

//push add elemnt from last and unshift add element from first side 


//remove the last iteam from ths array using a method 
// let numbers = [1,2,3,4];
// numbers.pop();


// //Extract only 3 elements middle from this array
// let items = [1,2,3,4,5,6];
// let newarr= items.slice(1,4); //[1,4)


//sort this array alphabatically and then reverse it 
// let names = ["Zebra" , "Arjun" , "Mira" , "Bhavya"]
//  let newnames = names.sort().reverse();


//use .map() to square each number 
// let arr = [1,2,3,4]
// let newarr = arr.map(function(val){
//     return val*val;
// })
// console.log(newarr);


// use ,filter() to keep number greater than 10 
// let arr = [5,12,8,20,3];
// let narray = arr.filter((val)=>{
//  return val>10;
// })
// console.log(narray)



//use .reduce() to find the sum of the array 
// let arr = [10,20,30];
// let nr = arr.reduce((acc,val)=>{
//    return val+acc;
// },0);
// console.log(nr);



//use.find to get first number less than 10 ; 
// let arr = [12,15,3,8,20];
// let nr = arr.find((val)=>{
//     return val < 10;l
// })
// console.log(nr);


//use .some() to check if any student hr scored below 35;
// let arr = [45,60,28,90];
// let nr = arr.some((val)=>{
//     return val < 35;
// })
// console.log(nr);


//use .every ()   to check if all numbers are even 
// let arr = [2,4,6,8,10];
// let een = arr.every((val)=>{
//     return val % 2 === 0;
// })
// console.log(een);


// Destructure this array to ge=t first name and lastname
// let fullName  = ["Chandan" ,"Kumar" , "Dalai"];
// let [firstName ,middleName , lastNme] = fullName;
// console.log(firstName)
// console.log(middleName)
// console.log(lastNme)

// merge two array uing spread operatot 
// let a = [1,2];
// let b = [3,4];
// let c = [...a,...b];


//add "India" to the start of this array using spread 
// let countries = ["USA" , "UK"];
// countries = ["INDIA" , ...countries];
// console.log(countries);



//clone this array properly (not by referance );
// let arr = [1,2,3];
// let arr2 = [...arr];
// console.log(arr2);