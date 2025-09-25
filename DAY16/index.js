// //variable
// // let name = "Chandan";
// // let age =19;



// // age = 30;
// // console.log(name , age);


// // const account = 234567;
// // // account =45; //it cant be added bcz of const keyword ;
// // console.log(account);


// //old method of variable declaration
// // var a = 20;
// // var a = 56;
// //using var we can redeclare the variable but let we cant redeclare the variable
// console.log(a);

// if (true){
//     var a = 39; 
//     //It doesnot respect function method 
// }
// console.log(a);


// if(true){
//     let age = 65;
// }
// console.log(age);// thorws error


//DAtA TYPEs

//premetive data type  num string , boolean ,undefined , null ,bigint , symbol
//non premitive data type  array , object , function

// let a = 20;
// let b = 20.52;
// console.log(a)
// console.log(b)
// console.log(typeof a)
// console.log(typeof b)


// let c = "Chandan is a Legend"
// let d = "I love you Anjali"
// let e = 'I love you so much Anjali'
// console.log(c,d,e);
// let login = true;
// let f = false;
// console.log(login , f);




//undened 
// let user;
// const gt = 78; //It requires value with out it throws error 
// console.log(user ); //it store undefined 


//bigint
// let num = 2345678998765434567894564567456785n;
// console.log(num);


//null
// let weather = null; // i have variable but i did not want to add this 
// console.log(weather)
// console.log(typeof weather)  // bug of javascript  it shows object


// let weather = current_weather("Bhubaneswar");
// console.log(weather);
// 34  ... Data 
// null  .. network not found
// Undefined .. not exit


// const id = Symbol("id");
// const id2 = Symbol("id");
// console.log(id==id2); //..>False
//create a unique value 



//non premitive data rype
// let arr = [10,34,"chandan",'Rocket',0.01];
// // console.log(arr);
// console.log(typeof arr); // array is an object


//obkect

// let user = {
//     name : "Chandan",
//     accountNo : 6562556,
//     age : 45,
//     category: 'General',
// }
// console.log(user);
// console.log(typeof user); 

//function
//   function add(){
//     console.log("Hello")
//   }
// add()
//Function ar store in variable 


// let s = function ad(){
//     console.log("Hello I am Bibek (Javacript Developer )I can call by the variable and i can store inside the variable lol chandu u dont know my power ")
// } 
//type shows function but it is object 


// console.log(s)  //[Function: ad]
// console.log(s())   //I can call by the variable lol chandu u dont know my power
// //undefined
// s()  //I can call by the variable lol chandu u dont know my power

// s()





let str = "Chandan"
str[0] = "M" //not possible bcz immutable
str ="van"
console.log(str);


// non premeative data are mutable
let arr = [10,20,30,40];
arr.push(90);
arr[0] = 45
console.log(arr);



let obj = {

    name: "Chandan",
    id : 456,

}
// obj.name = "Anjali"
let obj2 = obj;
obj2.name = "Anjali"
console.log(obj)