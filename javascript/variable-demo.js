function varExample(){
  var x=10;
  console.log("Initial value of x:", x);

  var x=20;
  console.log("Redeclared x:", x);

  if(true){
    var y=30;
   
  }
  console.log("Value of y output block:", y);

}
varExample();

function letExample(){
  let a=5;
  console.log("print value of a:", a);

  a=20;
  console.log("Redeclared value is:", a);

  if(true){
    let b=15;
    console.log("value of b inside block:", b);
    
  }
}
letExample();

function constExample(){
  const PI=3.14;
  console.log("Value of L inside function is:",PI);

   
   if(true){
    const greeting="Hello!";
    console.log("Greeting inside Block:", greeting);
   }
}
constExample();

console.log(x); //it gives undefined as output
var x=5;
console.log(x); //output 5

//console.log(y); // it gives TDZ error or not initialized
let y=10;
console.log(y); //output 10

//console.log(z); //it gives TDZ error or not initialized
const z=30;
console.log(z); //output 30

var x=1, w=2;
let a=3, b=4;
const PI = 3.14, gravity = 9.8;

console.log(x, w, a, b, PI, gravity);