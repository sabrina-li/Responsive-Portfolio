var canvas,c,mouse,font,color,maxR,maxSpeed;

window.addEventListener('load',function(event){

    canvas = document.querySelector("#canvas");
    c = canvas.getContext('2d');
    mouse ={ x:undefined,y:undefined};

    font = "60px Oswald";
    colors = ["#68284A","#E1DCEB","#E1E3E4","#C5CDCF"]
    maxR = 3,
    maxSpeed = 30;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    init();

    document.querySelector("#portfolio").addEventListener('click',function(event){
        window.location = 'about.html'
    })
    document.querySelector("#contact").addEventListener('click',function(event){
        var win = window.open('mailto:sabrinali0312@gmail.com');
    })

})


class Particles{
    constructor(x,y,dx,dy,color){
        this.x = x+Math.random()*1000-500;
        this.y = y+Math.random()*1000-500;
        this.initialX = x;
        this.initialY = y;
        this.radius = maxR //Math.random() * maxR + minR;
        this.initialColor = color;
        this.color = "white";
        this.initialDX = dx;
        this.initialDY = dy;
        this.dx= 0;
        this.dy=0;
    }
    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x-this.radius/2, this.y-this.radius/2, this.radius,this.radius );  
    }
    update(){
        if(getDist(mouse.x,mouse.y,this.initialX,this.initialY)<25){
            this.color=this.initialColor;
            this.dx = this.initialDX;
            this.dy = this.initialDY;
        }else{
            if(this.color=="white"){
                this.color="white";
            }
            this.dx= -(this.x - this.initialX)/15;
            this.dy= -(this.y - this.initialY)/15;

        }
       
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}


function drawText(text){
    c.clearRect(0,0,canvas.width,canvas.height);
    c.moveTo(200,200);
    c.fillStyle = 255;
    c.font = font;
    c.fillText(text,canvas.width*0.2,canvas.height*0.35);
}

var particles = [];
function initialPositions(){
    particles = [];
    data = c.getImageData(0,0,canvas.width,canvas.height).data;
    
    for(h=0;h<canvas.height;h=h+1){
        for(w=0;w<canvas.width;w=w+1){
            var color = data[((h * ( canvas.width * 4)) + (w * 4)) - 1];
            dx = Math.random()*maxSpeed - maxSpeed/2;
            dy = Math.random()*maxSpeed - maxSpeed/2;
            r = Math.floor(Math.random()*colors.length);
            if (color == 255) {
                particles.push(new Particles(w,h,dx,dy,colors[r]));
            }
        }
    }
    c.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(function(p){
        p.draw();
    })
    
}

window.addEventListener("mousemove",function(event){
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y- canvas.offsetTop;
})

window.addEventListener('resize',function(event){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})





function getDist(x1,y1,x2,y2){
    return Math.pow( Math.pow(x1-x2,2) + Math.pow(y1-y2,2) ,0.5);
}

function loop(){
    requestAnimationFrame(loop);
    c.clearRect(0,0,canvas.width,canvas.height)
    particles.forEach(function(p){
        p.update();
    })
}

function init(){
    drawText("Sabrina Li")

    initialPositions();
    console.log(particles.length);
    loop();
}


