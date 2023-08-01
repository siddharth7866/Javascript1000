
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






function fruitCutpieces(fruit) {
  return fruit*4;
}


function fruitJuices(apples,oranges) {
    const aples=fruitCutpieces(apples);
    const orange=fruitCutpieces(oranges);

    return `here is a juice of ${aples} cut piece of apples and ${orange} cut pieces of oranges`
}


console.log(fruitJuices(2,3));








// hidden feature of css using javascript

let btun=document.getElementById('btn');
let welcome=document.getElementById('welcome');

welcome.classList.add('hidden');


btun.addEventListener('click',function () {
   welcome.classList.remove('hidden');
})



//how to find the max and min from a array

const temp=[301,2,1,4,5,7,10,12,14,34,56,21,43,56,87,12,32,45,78,71,12,43,98,45,12,'error',43,66,22,33,44,88,11,22,221];
let minValue=Infinity;
let maxValue=-Infinity;

for (let item of temp) {

  if (item==='error')
    {}
  if (item>maxValue)
    maxValue=item
  if (item<minValue)
    minValue=item;


}


console.log("min "+minValue);
console.log('max '+maxValue);

console.log("Amplitude "+Number(maxValue-minValue));







const measureTemp=function() {
    const tempx={
        name:'Siddharth',
        Age:30,
        tempValue:237

    }

    const za=tempx.tempValue+Number(prompt("enter the temp"));
    return za;
}


console.log(measureTemp());


function calcage(age) {
  const aged=2037-age;

  function agedt() {
    const output=`the age is ${aged} of yours`
    console.log(output);




  }
  agedt();
  return aged;

}

console.log(calcage(1993));



//TDZ concept-Temporal Dead Zone
const muName='siddharth';
if (muName==='siddharth') {
  console.log(`hello my name is ${muName} and my job is ${job}`);
  const job='Teacher';
}



//Hoisting Concept:

console.log(namees);
let namees='siddharth'



// how data is stored in the stack and heap as object is stored in Heap and with help of identifiers.


var tge=30
var oldtge=tge;

tge=31

console.log(tge,oldtge)



const den={
  name:'rohit',
  age:34,
}

const sid=den;
sid.age=27;

console.log(den);
console.log(sid);

//Light Display in designer mananer

let sid =document.getElementsByTagName('p');


let botton=document.getElementsByTagName('button');

function display(){

    var d= new Date();
    sid.innerHTML=d.getFullYear();
        
}

botton.addEventListener('click',display);



let sid =document.getElementsByTagName('p')[0];


console.log(sid);
let botton=document.getElementsByTagName('button')[0];


console.log(botton);
let d= new Date();

function display(){
    sid.innerHTML=d.getFullYear();
    }

botton.addEventListener('mouseover',display);




function displayout(){
    sid.innerHTML="";
    }

function display(){
    sid.innerHTML=d.getFullYear();
    sid.style.color='red';
    }



botton.addEventListener('mouseover',display);

botton.addEventListener('mouseout',displayout);



var sid=document.getElementsByTagName('h1')[0];


var ran=Math.floor(Math.random()*16);
var a='0123456789ABCCEA';
// var num='#';

function colorChanger() {
    var num='#';
  // var a='0123456789ABCDEF';
  for (var i = 0; i < 6; i++) {
    var ran=Math.floor(Math.random()*16);
    num=num+a[ran];

  }
  return num;
}

console.log(colorChanger())
function colorS() {
  var col=colorChanger();
  sid.style.color=col;
}


setInterval('colorS()',180);






//Dest


const arr=[1,2,3,4,5];

let [a,b,c]=arr;
[a,b]=[b,a]
console.log("a",a)
console.log("b",b)



const sid={
  name:'siddharth',
  Address:'GkP',
  job:'Software Developer',

}

const {name,job}=sid;
console.log(`hello ${name} so you are ${job}`)




const Menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// for (const item of Menu.entries()){
//   console.log(`${item[0]+1}:${item[0]}`);
// }


// for (const item of Menu.entries()) {
//     console.log(`${item[0]+1}:${item[1]}`);
// }

for (const [i,j] of Menu.entries()) {
  console.log(`${i+1}:${j}`);
}

//default parameter for fucntions

function candy(qty,price=qty*5) {
  console.log(`Here are your ${qty} candies for ${price} rupees!`)
}


candy(5);



//table of given digit from user into the function:

function tableOf(a) {
  let number=a
  let incr=1
  console.log(typeof(number));
  if (typeof(number)==='number') {
    for (var i = 0; i < 10; i++) {
      console.log(`${number}x${incr+i}=${number*(incr+i)}`);
    }
  }else{
    console.log("please enter valid int");
  }
}

tableOf(4)




const sider=function(str){
  return str.replace(/ /g,'').toLowerCase();
}

console.log(sider("siddharth vishen"))

const vider=function(str){
  const [first,...other]=str.split(' ');
  return [first.toUpperCase(),...other].join(' ');
}
console.log(vider('sidharth Vishen'))
let a='siddharth vishen'
console.log(a.split(' '));



const greet=(greet,name)=>{
  console.log(`${greet}!${name}`)
}

greet('hello','Jonas')
