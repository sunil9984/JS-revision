console.log("hello");

function add(num,num2){
    return num+num2;
}

console.log(add(2,9));


let number = 22;
console.log(number);

let a = "113242ljnd";

let b = Number(a);

console.log(typeof(b));
console.log(b);


let c = null;
console.log(c);
let d = Number(c);
console.log(d);


let f = true;

console.log(Number(f));

let s = "sunil";
console.log(Number(s));

//-------------------------

let ff = false;
console.log(Number(ff));


let name = "sunil2323";
console.log(typeof(name));
//--------------------------

let aa = 22;
console.log(a++);
let bb = 44;
console.log(++bb);
let cc=22;
console.log(cc++);  
console.log(++cc);

//---------------------------
console.log("2">1);
console.log("03">1);


//-------------------------------Arrays---push, pop, shift, unshift, splice, slice,//
// map, filter, reduce, forEach, find, findIndex, some, every, sort, reverse, 
//includes, indexOf, concat, and flat.


let heros = ["shakiman","JuniorG","Kaliya"];
console.log(heros);

for(let i = 0; i<heros.length;i++){
    console.log(heros[i]);
}

heros.push("rambo");    
console.log(heros);


