let sid=document.getElementsByTagName('h1')[0];

sid.style.color='red';

function changeColor() {
  var a='0123456789ABCDEF';
  var ele='#';
  for (var i = 0; i < 6; i++) {
    var ran=Math.floor(Math.random()*16);
    ele=ele+a[ran];

  }
  return ele;
}

console.log(changeColor())

function colorC() {
  var col=changeColor();
  sid.style.color=col;

}

  setInterval('colorC()',500);
