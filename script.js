
// how to print any thing in java script

// https://edabit.com/challenges/javascript
// source for practice of questions related to javaScript

console.log('50/100 Questions');

// alert('50/100 Questions')

let name='siddharth';
console.log('Hello '+name+'!'+' Welcome💖💖');

function addd(a,b){
  return a+b;
}

console.log(addd(4,5));

function minutesseconds(a) {
    var seconds=a*60;
    return seconds;
}

console.log(minutesseconds(5));


function nextnumber(a) {
  var next=a;
  return a+1;
}

console.log(nextnumber(10));

// previous nextnumber
function prevnumber(a) {
  var pre=a;
  return a-1;
}

console.log(prevnumber(0));

function areatriangle(a,b) {
  var length=a;
  var width=b;
  var area=.5*(a*b);
  return area;
}

console.log(areatriangle(10,20));


function agetodays(year) {
    var year=year;
    return year*365;
}


console.log(agetodays(65));


// volume of cube
function vcube(side) {
    var side=side;
    return side*side*side;
  }
console.log(vcube(3));

// let sid=[23,45,67,87,34];
// console.log(sid[0]);

function getFirstValue(array) {
  var sid=array[0];
  return sid;
}
console.log(getFirstValue([80,34,67,89]));

function circuitPower(volt,current){
  let power=volt*current
  return power;
}

console.log(circuitPower(230,10));


function maximumedgeTriange(a,b) {
  let edge=(a+b)-1;
  return edge;
}


console.log(maximumedgeTriange(5,7));

function addUpto(x){
  let s=0
  for (var i = 0; i <(x+1); i++) {
    s=i+s;

  }
  return s;
}


console.log(addUpto(600));

function logger() {
  console.log("Hello Siddharth");
}

logger();


const Heloo=function (a) {
  return "Hello Expression "+a;
}

const sid=Heloo('siddharth');
console.log(sid);
