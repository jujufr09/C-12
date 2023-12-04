var path,   boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png")
  boyImg = loadAnimation ("Jake1.png","jake4.png","jake3.png")
 
}

function setup(){
  
createCanvas(400,400);
path = createSprite(200,200,2,2)
path.addImage(pathImg,"path.png")
path.depth = path.depth
path.scale=1.2;


boy = createSprite(200,340,2,2)
boy.addAnimation("jake3.png",boyImg)
boy.scale=0.7;

path.depth = path.depth;
boy.depth = boy.depth + 1;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 10;
  
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
