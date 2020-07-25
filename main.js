var canvas = document.getElementById("myCanvas");
var bg = new Image();
bg.src = 'img/bg.jpeg';
var asteroid = new Image();
asteroid.src = 'img/asteroidx40.png';

var rocket = new Image();
rocket.src = 'img/rocket3.png';

var points = 0;



window.onload = function() {
    var ctx = canvas.getContext("2d");
    // var randomNumber = Math.floor(Math.random() * (canvas.width - radius*2) + radius);

    function RandomNumber(min, max){
        return randomNumber = Math.floor(Math.random() * (max - min)) + min; 
    }

    function RandomColor(){
        var color = Math.floor(Math.random() * 16777215).toString(16);
        color = "#" + ("000000" + color).slice(-6);
        return color;
    }

    function Background(){
        this.x = 0; this.y = 0; this.w = bg.width; this.h = bg.height;

        this.render = function(){
            ctx.drawImage(bg, this.x-=2,0);

            if(this.x < -899){
                this.x = 0;
            }
        }   
    }   

    var background = new Background();

    var x = canvas.width/2;
    var y = canvas.height/2;

    class Rect {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        //methods
        Draw(width, height){
            ctx.beginPath();
            ctx.rect(this.x,this.y,width,height);
            ctx.fillStyle = "#fe0";
            ctx.fill();
            ctx.closePath();
        }
    }
    
    class Ball {
        constructor(xPos, yPos, radius) {
            this.x = xPos;
            this.y = yPos;
            this.radius = radius;
        }
        //methods
        Draw(color){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
            ctx.strokeStyle = color;
            ctx.stroke();
            ctx.closePath();
        }
    }


    canvas.addEventListener("mousemove",function(){
        var rect = canvas.getBoundingClientRect();
        var xPointer = event.pageX - Math.floor(rect.left);     
        var yPointer = event.pageY - Math.floor(rect.top);

        x = xPointer-32;
        y = yPointer-32;
     });

    
    //  asteroid = new Ball(RandomNumber(10,800),RandomNumber(10,400),RandomNumber(10,50));
    //  asteroid.Draw(RandomColor());
    
    var posX = 0;
    var posY = 0;
    var dx = 1;
    var dy = 5; 

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.render();

        // rocket = new Rect(x,y);
        // rocket.Draw(30,10);
        ctx.beginPath();
        ctx.drawImage(rocket, x,y);
        ctx.closePath();

        
        document.getElementById("score").innerHTML = "SCORE: " + points;

        if(x >= posX && x <= posX+40 && y >= posY && y <= posY+40){
            points++;
            posY = 0;
            posX = RandomNumber(0,canvas.width);
            // if(points >= 10){
            //     dy+=3;
            //     points=0;
            // }
        }
        
        ctx.beginPath();
        ctx.drawImage(asteroid, posX,posY);
        ctx.closePath();

        posY += dy;

        if(posY > canvas.height-40){
            posY = 0;
            posX = RandomNumber(0,canvas.width);
        }

        ctx.restore();
     }
     setInterval(draw, 10);
     
  };


