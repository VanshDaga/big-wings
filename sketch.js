
var bgimg,splash
var gameState="wait"
var goteggimg,eggimg,eggmissedimg,playbutton,nextbutton

function preload(){

splash=loadImage("assets/BigWings!!.gif")
goteggimg=loadImage("assets/gotegg.png")
eggimg=loadImage("assets/egg.png")
eggmissedimg=loadImage("assets/eggmissed.png")
bgimg=loadImage("assets/bg.jpeg")

}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton=createImg("assets/start.png")
playbutton.position(width/2-120,height-230)
playbutton.size(300,300)



}

function draw(){

   if (gameState=="wait"){
      playbutton.show()
background(splash)}


playbutton.mousePressed(()=>{
   playbutton.hide()
   gameState="about"
})

if (gameState=="about"){

   popabout()
}


if (gameState=="level1"){
   background(bgimg)
}
}

function popabout(){
swal({
   title: "Enter the World of EGGs!! \n Aim of the Game is to Collect the GOLDEN EGG!!",
   text:"To win!! collect eggs and move a level UP!!",
   imageUrl:"assets/gotegg.png",
   imageSize:"200x200",
   confirmButtonText:"START ", 
    confirmButtonColor:"green"

},
function(){
   gameState="level1"
})


}



