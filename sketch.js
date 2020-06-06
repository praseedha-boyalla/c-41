var name = "praseedha";
console.log(name);
var n=50;
 console.log(n)
var booleons =true;
console.log(booleons);
var a ;
console.log(a);
a=null;
console.log(a);
var array=["praseedha",100,"maths"];
console.log(array);
var array2 = [["praseedha",100],["lekhana",80]];
console.log(array2);
array2.push(50);
console.log(array2);
array2.pop();
console.log(array2);
function preload(){
  bg=loadImage("a.jpeg");
}

function setup(){
  createCanvas(1200,600);
  ball = createSprite(50,50);
  ball.shapeColor="black";
ball.setVelocity(2,2);

}
 function draw(){
   background(bg);

   for (var i=50;i<1200;i+=100){
     for (var j=50;j<1200;j+=100){

     
     sprite = createSprite(i,j,50,50);
   }
  }
  camera.x=ball.x;
  camera.y=ball.y;

drawSprites();


  
 }