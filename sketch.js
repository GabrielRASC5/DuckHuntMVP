// let dirt = "222,184,135";
// let grass = 76,187,23;
// let tree = 83, 49, 24;

let xspeed = 675;
let yspeed = 480;
let x = xspeed;
let y = yspeed;
let xdirection = 1;
let ydirection = 1;
let duck = "yellow";

var img;

function setup(){
    createCanvas(1350,790);
    background(135,206,250);
    noStroke();
    fill(222,184,135);
    rect(0,600,1350,190);
    // dirt
    fill(76,187,23);
    rect(0,500,1350,100);
    ellipse(1120,490,95,150);
    ellipse(1145,485,60,40);
    ellipse(1095,485,60,40);
    // grass/bush
    fill("green");
    stroke(76,187,23);
    strokeWeight(3);
    rect(150,670,120,70,20);
    // shot box
    rect(400,670,540,70,20);
    // hit box
    rect(1080,670,200,70,20);
    // score box
    stroke("turquoise");
    strokeWeight(2);
    fill("turquoise");
    textSize(15);
    text("SHOT",190,731);
    // shot box
    stroke(76,187,23);
    strokeWeight(2);
    fill(76,187,23);
    textSize(25);
    text("H I T",420,700);
    // hit box
    stroke("white");
    strokeWeight(2);
    fill("white");
    textSize(37);
    text("SCORE",1131,731);
    // score box
    noStroke();
    //tree
    fill(83, 49, 24);
    rect(135,250,45,250);
    translate(width / 2, height / 2);
    rotate(PI / 3.0);
    rect(-280,300,30,150);
    // rect(-90,270,30,170);
    // img = loadImage("duckFly.gif");  // Load the image
    // image(img, 50,50)
}

function draw(){

    background("turquoise");
    noStroke();
    //dirt
    fill(222,184,135);
    rect(0,600,1350,190)
    //bush/grass
    fill(76,187,23);
    rect(0,500,1350,100);
    ellipse(1120,490,95,150);
    ellipse(1145,485,60,40);
    ellipse(1095,485,60,40);
    ellipse(1095,470,80,40);
    //tree 
    // ellipse(135,240,100,75);
    fill("black");
    stroke(76,187,23);
    strokeWeight(3);
    rect(150,670,120,70,20);
    // shot box
    rect(400,670,540,70,20);
    // hit box
    rect(1080,670,200,70,20);
    // score box
    stroke("turquoise");
    strokeWeight(2);
    fill("turquoise");
    textSize(15);
    text("SHOT",190,731);
    // shot box
    stroke(76,187,23);
    strokeWeight(2);
    fill(76,187,23);
    textSize(25);
    text("H I T",420,700);
    // hit box
    stroke("white");
    strokeWeight(2);
    fill("white");
    textSize(31);
    text("SCORE",1131,731);
    // score box
    // rect(-90,270,30,170);

    
    x+=xdirection*3;
    y+=ydirection*5;
    fill(duck);
    noStroke();
    ellipse(x,y,50,50);
    noStroke();
    // image(img,x,y);

    if(x>1300){
        //change direction
    xdirection = -1
    }

    else if(x<50){
        //change direction
        xdirection = 1
    }

    if(y>470){
        //change direction
        ydirection = -1
    }

    else if(y<50){
        //change direction
        ydirection = 1
    }
    fill(83, 49, 24);
    rect(135,250,45,250);
    translate(width / 2, height / 2);
    rotate(PI / 3.0);
    rect(-280,300,30,150);
    cursor(CROSS);
}

function mouseClicked(){
    if (duck === "yellow"){
        duck = "turquoise";
    }else{
        duck = "yellow";
    }
}

