//Object 
//store in key value 
// right is value 
//name store as string 
//benefits 
// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,
//     "Home Adress": "Mars"
// }
//CURD operation creat read update delete
// console.log(objx)
// console.log(user.age);
// user.adhaar=1234;
// user.amount=1234454535;
// delete user.emailID;
// console.log(user)
// console.log(user["Home Adress"])
// console.log(user["name"])


// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,
// }

// const user2 = user;
// user2.age = 500;
// console.log(user)

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let  keys  in user){
//     // console.log(keys);
//     // console.log(keys,user.keys);>> Not work bz keys call to the near so it called loop but adding [] it called user object 
//     console.log(keys,user[keys]);
// }


//user.Keys  user["name"] user["age"]


// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,
// }

// const name = user.name;
// const age = user.age;
// object distracture
// const {name,age,amount} = user;
// const {name:x,age:y,amount:z}= user;
// console.log(name,age,amount);
// console.log(x,y,z);

// const arr = [ 10,20,30,40,50];
// // const[first,second] = arr;
// const[depak,amitab] = arr;
// console.log(depak,amitab);





// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,
// }
// const temparr = Object.keys(user)
// for (let keysx of Object.keys(user)){
//     console.log(keysx);
// }
// for (let valuex of Object.values(user)){
//     // console.log(keys); //not define
//     console.log(valuex);
// }

// for (let valuexy of Object.entries(user)){  //return array
//     // console.log(keys); //not define
//     console.log(valuexy);
// }

// for(let [keys ,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,

//     greeting : function(){
//         console.log("Bibek is noob");
//         return 20;
//     }
// }

// // user.greeting();
// const va = user.greeting();
// console.log(va);



// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,

//     greeting : function(){
//         console.log(`Bibek is noob ${this.name}`);   //user.name also allowed
//         return 20;
//     }
// }

// const va = user.greeting();
// console.log(va);

// const user2 = {
//     name:"Chandan",
//     age : 56,
// }
// user2.greeting = user.greeting();
// console.log(user2)


// const user = {
//     name: "Bibek",
//     age: 45,
//     emailID: "bibek@gmail.com",
//     amount: 32000,
//     address : {
//         city : "Jungle",
//         state: "Mars",

//     }
// }

// console.log(user)
// console.log(user.address.city)

// const user2 = {...user};
// user2.name = "Rabi";
// console.log(user2)
// console.log(user)
//Shallow copy 
// const user2 = {...user}; //it doesnot handel nested objective 
// user2.address.city = "Jupiter";
// console.log(user);

//Deep copy 
// const user2 = structuredClone(user);
// user2.address.city = "Jupiter";
// console.log(user)

//Key can be store in symbol or string 
const sym = Symbol("Vibek")
const user = {
    name:"Chandan",
    age:90,
    0: 3456,
    2: "Bibek",
    [sym]:"Hello Ji"  //sym >> it can be string so we add []
}
//
console.log(user["0"]);
console.log(user[sym]);


const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3:40,
// }