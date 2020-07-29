let bg;
let ufo;
let asteroid;
let x1=0;
let x2;
let dx = 4;
let posX, posY;
let velocity = 3;
let asteroids = [];
let points = 0;

class Asteroid{
   
  constructor(){
    this.x = random(ufo.width,width);;
    this.y = height;
    this.load = asteroid;
    this.route = random(1) < 0.5;
  } 
  
  move(){
      if(this.route){
        this.x += velocity;
      }else{
        this.x -= velocity;
      }
    
      this.y -= velocity;
  }
  
  show(){
       image(asteroid,this.x,this.y);
  }
  
}

function setup() {
  createCanvas(800, 450); //16:9
  x2 = width;
  
}

function draw() {
   document.getElementById("score").innerHTML = "SCORE: " + points;
  if(random(1) < 0.01){
    asteroids.push(new Asteroid());
  }
    
  background(0);
  image(bg,x1,0,width,height);
  image(bg,x2,0,width,height);
  x1 -= dx;
  x2 -= dx;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

  image(ufo,mouseX-ufo.width/2,mouseY-ufo.height/2);
  
  for(let a of asteroids){
    a.move();
    a.show();
   
    
    if(collideCircleCircle(mouseX, mouseY, ufo.width-10,a.x+asteroid.width/2,a.y+asteroid.width/2,asteroid.width+1)){
      noLoop();
      button = createButton('RESTART');
       button.position(width/2, height/2);
       button.mousePressed(restart);

    }
     
    if(a.y+asteroid.width/2 < 0 && a.x+asteroid.width/2 < width && a.x+asteroid.width/2 > 0){
      points++;
    }
    
  }
    
}

function randomColor(){
  return color(random(255),random(255),random(255));
}

function preload() {
  bg = loadImage('bg.jpeg');
  ufo = loadImage('ufo.png');
  asteroid = loadImage('asteroidx40.png');
}

function restart() {
  points = 0;
  asteroids = [];
  button.remove();
  loop();
}

