const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11,13);

    if(hour >=06 && hour <=07){
        bg="sunrise1.png"
     }
     
     else if(hour >=07 && hour <=08){
        bg="sunrise2.png"
     }

     else if(hour >=08 && hour <=09){
        bg="sunrise3.png"
     }

     else if(hour >=09 && hour <=10){
        bg="sunrise4.png"
     }

     else if(hour >=11 && hour <=12){
        bg="sunrise5.png"
     }

     else if(hour >=13 && hour <=14){
        bg="sunrise6.png"
     }

     else if(hour >=15 && hour <=16){
        bg="sunset7.png"
     }

     else if(hour >=16 && hour <=17){
        bg="sunset8.png"
     }

     else if(hour >=17 && hour <=18){
        bg="sunset9.png"
     }

     else if(hour >=18 && hour <=19){
        bg="sunset10.png"
     }

     else if(hour >=19 && hour <=20){
        bg="sunset11.png"
     }
     
     else{
        bg="sunset12.png"
     }

    backgroundImg=loadImage(bg);

}
