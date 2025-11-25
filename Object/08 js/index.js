//Object 
// const user  = {
//     name : "Chandan",
//     age : 30,
//     EmailId: "kumar@gmail.com",
//     amount : 3555,
//     "Home Adresss" : "God";
// }

// console.log(user);
// console.log(user.age);



// user.adhar = 1234;
// console.log(user)
// user.amount = 5654;
//delete
// delete user.EmailId;
// console.log(user.age)




// const user  = {
//     name : "Chandan",
//     age : 30,
//     EmailId: "kumar@gmail.com",
//     amount : 3555,
//     "Home Adresss" : "God",
// }

// const user2 = user ;
// user2.age = 90;
// console.log(user);

//Important 
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user){
//     // console.log(keys);
//     console.log(keys , user[keys]);
// }
//user[keys] >> user["name"]  user["age"];


// const user  = {
//     name : "Chandan",
//     age : 30,
//     EmailId: "kumar@gmail.com",
//     amount : 3555,
//     "Home Adresss" : "God",
// }
// for (let keys of Object.keys(user)){
//     console.log(keys);
// }
// for (let values of Object.values(user)){
//     console.log(values);
// for (let entries of Object.entries(user)){
//     console.log(entries);
// }
// for (let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }






// const user  = {
//     name : "Chandan",
//     age : 30,
//     EmailId: "kumar@gmail.com",
//     amount : 3555,
//     "Home Adresss" : "God",
//     greeting : function (){
//         console.log("Hello ");
//         console.log(`${this.name}`);
//         // console.log(`${user.name}`);  //for flxbelity dont use this user 
//         return 20;
//     }
// }

// let p = user.greeting()
// console.log(p)



// const user  = {
//     name : "Chandan",
//     age : 30,
//     EmailId: "kumar@gmail.com",
//     amount : 3555,
//      address : {
//         city: "Bhubaneswar",
//         state: 'Odisha',
//     }
// }

// console.log(user.address.city);

// const user2 = {...user}; //make indipendent copy ... operator 
// user2.name = "Shyam";
// console.log(user)
// console.log(user2)
//There ws a catch it act only on 1 level see the below 
// const user2 = {...user};
// user2.city = "Abcd";
// user2.address.city = "Abcd";
// console.log(user);



// above are the shallow copy now tiime for deep ccopcy

// const user2 = structuredClone(user);
// user2.address.city = "Abcd";
// console.log(user);


// const  sym  = Symbol("id");

// const user = {
//      name : "chandan",
//      age : 34,
//      0: 100,
//      2: "Chandan2",
    //  sym : "Hello" here sym not as a symbol it ac as a string so we follow belo 
//     [sym] : "Hello",
// }
// console.log(user[0])
// console.log(user[sym])


