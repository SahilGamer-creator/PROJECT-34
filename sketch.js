//Create variables here
var database;
var dog,happyDog,foodS,foodStock;
var dogimg,happydogimg;

function preload()
{
  //load images here
  dogimg=loadImage("images/Dog.png");
  happydogimg = loadImage("images/happyDog.png");
}

function setup() {

database = firebase.database();

createCanvas(1000, 750);

 dog = createSprite(500,400,10,10);


  dog.addImage(dogimg);

 foodStock = database.ref('Food');
 foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();


  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogimg);
  }

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}

