var canvas = document.getElementById("myCanvas");
var bg = new Image();
bg.src = 'img/bg.jpeg';

window.onload = function() {
    var ctx = canvas.getContext("2d");

    var radius = 3;
    var randomNumber = Math.floor(Math.random() * (canvas.width - radius*2) + radius);

    function RandomColor(){
        var color = Math.floor(Math.random() * 16777215).toString(16);
        color = "#" + ("000000" + color).slice(-6);
        console.log(color);
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
    console.log("random: "+randomNumber);

    var dx = 1;
    var dy = -1;
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

    canvas.addEventListener("mousemove",function(){
        var rect = canvas.getBoundingClientRect();
        var xPointer = event.pageX - Math.floor(rect.left);     
        var yPointer = event.pageY - Math.floor(rect.top);

        x = xPointer-10;
        y = yPointer-10;
     });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.render();

        rocket = new Rect(x,y);
        rocket.Draw(20,20);

        ctx.restore();
     }
     setInterval(draw, 10);
     
  };


