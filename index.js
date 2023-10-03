/*
console.log("siddharth");

function sid(a) {
  if (typeof a === "string") {
    console.log("Please enter number not string");
  } else {
    let s = 10 + a;
    console.log(s);
  }
}

sid(10);

//Map function

var s = [1, 2, 3, 4, 5, 6, 7, 8];
var sid = s.map((x) => x + 100);
console.log(sid);

function sid() {
  console.log("siddharth");
}

setTimeout(sid, 1000);
console.log("vishen");

console.log(dx);
dx = 10;
let dx;
console.log(dx);
dx = 10;

var x = 10;
function sde() {
  var x = 5;
  var df = x + 2;
  console.log(df);
}

sde();
console.log(x);

//CLI APP
var sid = document.getElementsByTagName("h1")[0];
console.log(sid);

alert("Welcome To Siddharth Cafe");
function out() {
  alert("u exit");
}

sid.addEventListener("mouseover", decide);
sid.addEventListener("mouseout", out);

function decide() {
  let userd = prompt("Do you want coffee or read book");
  if (userd === "coffee") {
    alert("Please go to the first floor");
  } else {
    alert("Please show your library card");
  }
}

// decide();


if (5 > 3) {
  var vishen = 10;
  console.log("I am sid");
}

console.log(vishen);

x = 100;
console.log(x);
var x;

var ddd = 200;
ddd = 300;
console.log(ddd);

//Data types determine the types of variable
//primitive and non primitive data types
//primitive data tpes value do not change
var gopi = [100, 20, 30, 0.984, 5, 60, 17];
console.log(gopi.filter((x) => x >= 100));
console.log(gopi.map((x) => x - 100));
console.log(gopi.reduce((total, current) => total + current));
console.log(gopi.slice(1, 4));
//Non Primitive data types are both mutable and and contain multiple elements
//NUll and undefined
let xyz;
console.log(xyz);
let za = null;
console.log(za);
console.log(gopi.map((x) => x + "sid"));
//undefined is when in present there is no variable but in future there will be variable

var sid = 4;
var vis = "42";
console.log(sid === vis);
console.log(5 > 10 ? "Yes" : "NO");
var sidd = true;
console.log(sidd ? "siddharth" : "vishen");
console.log(sid > 9 ? "sid" : sid > 5 ? "yes grt than 5" : "less than 5");
var A = 15;
while (A > 9) {
  A = A - 1;
  console.log(`I am the best ${A}`);
}
//short circuiting in javascript
function scrt() {
  console.log("|| short circuiting");
}
var sidrt = scrt();

console.log(true && false);
switch (sid > 50) {
  case true:
    console.log("greater than 50");

    break;
  case false:
    console.log("less than 50");

  default:
    break;
}

let sid = [1, 20, 3, 4, 5];
let gopi = { skill: "php", core: "entreprenuer", address: "gkp" };

// let msd = prompt("enter the value");

console.log(...sid);
const [sidd, vishen, rajat] = sid;
console.log(sidd);
console.log(vishen);
console.log(rajat);
const { skill, address } = gopi;
console.log(skill);
console.log(address);
//Arrays in javscript
console.log(sid.indexOf(5));
console.log(sid.find((x) => x % 2 === 0));
console.log(sid.filter((x) => x !== 3));
console.log(sid.push(786));
console.log(sid);
console.log(...sid, 200);
console.log(sid);
console.log(sid.pop());
console.log(sid);
console.log(sid.shift());
console.log(sid);
//splice methos is one of the most important method
console.log(sid);
console.log(sid.splice(1, 0, 786));
console.log(sid);
var newarry = sid.map((x) => x + 2);
console.log(newarry);
let forarry = newarry.forEach((e) => console.log(e + 2));
console.log(forarry);
console.log(sid);
sid.sort();
console.log(sid);

const sidfruits = ["apple", "grapes", "banana", "litchi"];
const [rajatshahi, gaurav, anurag] = sidfruits;
console.log(rajatshahi);
console.log(anurag);
console.log(anurag.length);
console.log(anurag[2]);
var gopi2 = { 0: "s", 1: "v", 2: "s", 3: "rajat" };
var dexc = Array.from(gopi2);
console.log(dexc);
*/
//Loops are the most important topics in any programming logic
var sid = 10;
while (sid > 2) {
  sid = sid - 1;
  if (sid === 2) {
    console.log(`I am 2 and its time to go ! ❤️ Good Bye`);
    break;
  }
  console.log(`I am ${sid} still less than 10`);
}
var gopi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (x of gopi) {
  console.log(x);
}
