//1-Declaration
//A-Literals method

const user = {
    name : "Sunil",
    age : "27",
    Address : "Delhi",
    email : "abc@gmail.com",
    isLogIn : true,
    lastSeen : "1:03:33",
    "full_name" : "sunil_kumar_gupta"
}

// B- Access
//a-dot ,ethod

console.log(user.email);
console.log(user.Address);

//b-square method

console.log(user["name"]);
console.log(user.full_name);//dot
console.log(user["full_name"]);//square

//Note-for sqare method access always use string key

// how to use a symbol as a key in the objects********
const mysymbol = Symbol("key");
//ex-
const user1 = {
    key : "Hello",
    [mysymbol] : "Bye"
}
// second is the best method, no need to pass as string
console.log(user1[mysymbol]);//normally used as index like key


// how to change the value of the objects's literals

user["full_name"]="akash";
console.log(user["full_name"]);

// How to lock the value so that no one can not change the value

Object.freeze(user);

//Now we can't alter the values of the user, let try
user.name = "Madan";
console.log(user.name);//printing as sunil, not madan, so unchanged


const tinderUser1 = new Object();// singleton object
const tinderUser2 = {} //Non a singleton object

tinderUser2.name = "sunil";
tinderUser2.age = "27";
tinderUser2.address1 = "Delhi"

tinderUser1.name = "snil";
tinderUser1.age = "7";
tinderUser1.address1 = "elhi"

console.log(tinderUser2);
console.log(tinderUser1);

//nested objects
const regularUser = {
    email : "abcd@gmail.com",
    fullname : {
        firstname : "vinay",
        secondname : "pandey"
    },
    age : 33
}

console.log(regularUser.email);
console.log(regularUser.fullname.firstname);
console.log(regularUser.fullname.secondname);//use dot operatter as needed
console.log(regularUser.age);

//Combining one or more objects 
 
const userA1 = {
    name : "vinay",
    age : "22"
}

const userB1 = {
    name1 : "akash",
    age1 : "24"
}

//method1- make an object and put these two in that objects
const userC1={
    userA1,
    userB1
}
console.log(userC1);
//method2-assign method
const userD1 = Object.assign(userA1 , userB1);
console.log(userD1);

//spread operator
const userE1 = {
    ...userA1,
    ...userB1,
    ...tinderUser2
}

console.log(userE1);


//the data comes from database ad the array of the objecs so loop them or user[1].email se accesss kr sakte ho
//ex

const users = [
    u1={
        name:"sunil",
        age:22
    },
    u2={
        name:"akash",
        age :"23"
    },
    u3={
        name:"kavita",
        age:25
    }
]
console.log(users[2].name , users[1].age);

//how to get all the keys of an object

const userA2 = {
    name : "sunil",
    id : "sdjasd123",
    age : "27",
    address : "Delhi"
}

// let keys = [];
// keys = Object.keys(userA2);//it returns the arrays of the keys
//or
let keys1 = Object.keys(userA2);
console.log(keys1);

// similarly you can get all the values of the whole object
let vals = Object.values(userA2);
console.log(vals);
// to get all the entries of the key-val pair in the array form

let keyVals = Object.entries(userA2);
console.log(keyVals);

// how to check a key is present is not in the object
// use hasOwnProperty - true/false
let userA3 = {
    name:"sunil",
    age:"27",
    add:"Delhi"
}

let ispresent = userA3.hasOwnProperty("fullName");
console.log(ispresent);


// Destructuring of the Objects//

const userB3 = {
    name : "vinay",
    age : "33",
    add : "Noida",
}

//All the data comes from API in the form of the JSON and keys are as string, and many times the data comes in
//the form of the array of the objects
