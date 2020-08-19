var car,car2,car3,car4;
var wall,wall2,wall3,wall4,barrier,barrier2,barrier3,barrier4,barrier5;
var speed,speed2,speed3,speed4,weight,weight2,weight3,weight4;

function setup() {
  createCanvas(600,400);

  //Speed and Weight
  speed = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  speed4 = random(55,90);
  weight = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);
  weight4 = random(400,1500);

  //The Cars
  car = createSprite(50,50,20,15);
  car2 = createSprite(50,150,20,15);
  car3 = createSprite(50,250,20,15);
  car4 = createSprite(50,350,20,15);
  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;

  //Walls and Barriers
  wall = createSprite(550,50,20,30);
  wall2 = createSprite(550,150,20,30);
  wall3 = createSprite(550,250,20,30);
  wall4 = createSprite(550,350,20,30);
  barrier = createSprite(300,100,600,50);
  barrier2 = createSprite(300,200,600,50);
  barrier3 = createSprite(300,300,600,50);
  barrier4 = createSprite(300,400,600,40);
  barrier5 = createSprite(300,0,600,40);
  wall.shapeColor = ("black");
  wall2.shapeColor = ("black");
  wall3.shapeColor = ("black");
  wall4.shapeColor = ("black");
  barrier.shapeColor = ("black");
  barrier2.shapeColor = ("black");
  barrier3.shapeColor = ("black");
  barrier4.shapeColor = ("black");
  barrier5.shapeColor = ("black");
}

function draw() {
  //Background
  background(200);

  //The Crash
  if(wall.x - car.x < wall.width/2 + car.width/2){
    //Deformation Formula
    var deformation = (weight * speed * speed * 0.5)/22500;

    //Deformation Commands
    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }

    if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  if(wall2.x - car2.x < wall2.width/2 + car2.width/2){
    //Deformation Formula
    var deformation2 = (weight2 * speed2 * speed2 * 0.5)/22500;

    //Deformation Commands
    if(deformation2 < 100){
      car2.shapeColor = "green";
    }

    if(deformation2 < 180 && deformation2 > 100){
      car2.shapeColor = "yellow";
    }

    if(deformation2 > 180){
      car2.shapeColor = "red";
    }
  }

  if(wall3.x - car3.x < wall3.width/2 + car3.width/2){
    //Deformation Formula
    var deformation3 = (weight3 * speed3 * speed3 * 0.5)/22500;

    //Deformation Commands
    if(deformation3 < 100){
      car3.shapeColor = "green";
    }

    if(deformation3 < 180 && deformation3 > 100){
      car3.shapeColor = "yellow";
    }

    if(deformation3 > 180){
      car3.shapeColor = "red";
    }
  }

  if(wall4.x - car4.x < wall4.width/2 + car4.width/2){
    //Deformation Formula
    var deformation4 = (weight4 * speed4 * speed4 * 0.5)/22500;

    //Deformation Commands
    if(deformation4 < 100){
      car4.shapeColor = "green";
    }

    if(deformation4 < 180 && deformation4 > 100){
      car4.shapeColor = "yellow";
    }

    if(deformation4 > 180){
      car4.shapeColor = "red";
    }
  }
  car.collide(wall);
  car2.collide(wall2);
  car3.collide(wall3);
  car4.collide(wall4);

  drawSprites();
}