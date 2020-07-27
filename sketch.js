//Create variables here
var dog,happyDog,foodStock,milkBottles,dogImage;
function preload(){
  //load images here
   dogImage=loadImage("images/dogImg.png");
   happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog=createSprite(350,350,20,20);
  dog.addImage(dogImage);

  var database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(milkBottles);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("white");
  text(foodStock,100,150);
 

  // text("To feed your pet press the up arrow key"+350+50);
  // textSize(50);
  // fill("white");
}

//Adding Value inside the variable
function readStock(data){
  milkBottles=data.val();
}

 //Updating Food Stock
 function updateFoodStock(milk){
   database.ref('/').upadate({
     milkBottles:milk
   })
 }
 //Adding Values to database
 function writeStock(milk){
   if(milk<=0){
     milk=0
   }
   else{
     milk=milk-1
   }
  
 }



