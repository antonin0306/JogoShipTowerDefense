const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundoImg;
var torre;
var torreImg;
var canhao;
var bolas = []
var navios = []
var boatAnimation = [];
var boatSpritedata, boatSpritesheet;
var waterSplashAnimation = [];
var waterSplashSpritedata, waterSplashSpritesheet;
var brokenBoatAnimation = [];
var brokenBoatSpritedata, brokenBoatSpritesheet;


function preload() {
fundoImg = loadImage ("./assets/background.gif")
torreImg = loadImage ("./assets/tower.png")
boatSpritedata = loadJSON("assets/boat/boat.json");
boatSpritesheet = loadImage("assets/boat/boat.png");;
waterSplashSpritedata = loadJSON("assets/waterSplash/waterSplash.json");
waterSplashSpritesheet = loadImage("assets/waterSplash/waterSplash.png");
brokenBoatSpritedata = loadJSON("assets/boat/brokenBoat.json");
  brokenBoatSpritesheet = loadImage("assets/boat/brokenBoat.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  options={
  isStatic:true
  }
  
  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);
  torre = Bodies.rectangle(160,350,160,310,options);
  World.add(world,torre);
  canhao = new Canhao (180,110,130,100,20)
  boladecanhao= new BolaDeCanhao (canhao.x,canhao.y)
  var boatFrames = boatSpritedata.frames;
  for (var i = 0; i < boatFrames.length; i++) {
    var pos = boatFrames[i].position;
    var img = boatSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    boatAnimation.push(img);
  }
  
  var brokenBoatFrames = brokenBoatSpritedata.frames;
  for (var i = 0; i < brokenBoatFrames.length; i++) {
    var pos = brokenBoatFrames[i].position; // pega posicao
    var img = brokenBoatSpritesheet.get(pos.x, pos.y, pos.w, pos.h); // pega a img
    brokenBoatAnimation.push(img); // adiciona a img na matriz
  }

  var waterSplashFrames = waterSplashSpritedata.frames;
  for (var i = 0; i < waterSplashFrames.length; i++) {
    var pos = waterSplashFrames[i].position;
    var img = waterSplashSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    waterSplashAnimation.push(img);
  }
}

function draw() {
  background(189);
  Engine.update(engine);
  angleMode(DEGREES)
  //rect(ground.position.x, ground.position.y,width*2,1);
  image (fundoImg,0,0,1200,600)
  push()
  imageMode(CENTER)
  image(torreImg,torre.position.x,torre.position.y,160,310)
  pop()
  canhao.show()
  for (var i = 0; i<bolas.length; i++) {
mostrarB(bolas[i],i)
  baterNavio(i)
  }
  showBoats()
}
function keyReleased () {
if (keyCode==DOWN_ARROW) {
  bolas[bolas.length-1].throw()
}
}
function keyPressed () {
  if (keyCode==DOWN_ARROW) {
    var bola = new BolaDeCanhao (canhao.x, canhao.y)
    bolas.push (bola)
  }
}
function mostrarB (ball,i) {
if (ball) {
ball.display()
ball.animate()
if (ball.body.position.x>=width||ball.body.position.y>=height-50) {
if (!ball.isSink) {
  ball.remove(i)
}
}
}
}
function showBoats () {

if (navios.length>0) {
  if (navios[navios.length-1]==undefined || navios[navios.length-1].body.position.x<width-300) {
    var posicoes = [-40,-60,-70,-20]
    var posicao = random (posicoes)
    var navio = new Boat(width,height-100,170,170,posicao,boatAnimation)
navios.push(navio)
  }
for (let i = 0; i < navios.length; i++) {
if (navios[i]) {
  Matter.Body.setVelocity(navios[i].body,{
    x:-0.9,
    y:0
  })
navios[i].display()
navios[i].animate()
}
}
}
else {
var navio = new Boat(width,height-70,170,170,-60,boatAnimation)
navios.push(navio)
}
}
function baterNavio (bola) {
  for (var i = 0; i<navios.length; i++) {
    if (bolas[bola]!=undefined && navios[i]!=undefined) {
      var boom = Matter.SAT.collides(bolas[bola].body,navios[i].body)
      if (boom.collided) {
        console.log (navios[i])
        navios[i].remove(i)
        bolas[bola].remove(bola)
      }
    }
  }
}