var socket;

let x = 0;
let y = 0;
let player;
let playerx = 0;
let playerz = 0;
let playery = 0;
let movementspeed = 10;
let runmultiplier = 1;

let multx = 0;
let multy = 0;
let multz = 0;

//mp vars
multx = 0;
multy = 0;
multz = 0;

multrotatex = 0;
multrotatey = 0;

//bullets
let bullets = [];

let enemies = [];

//sensitivity
let lookspeed = 3;

function preload(){
  //dark = loadImage('assets/dark.png')
  //blaa = loadImage('assets/blue.jpg')
}

function setup() {
  createCanvas(1600, 800, WEBGL);
  background(50);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', NewDrawing);
  angleMode(DEGREES);
  rectMode(CENTER);
  player = new Player();

  for (let i=0; i<10;i++) {
    enemies.push(new Enemy());
  }
}

function NewDrawing(data){
  multx = data.x;
  multy = data.y;
  multz = data.z;

  multrotatex = data.rx;
  multrotatey = data.ry;
}

function draw() {

  ambientLight(255);
  directionalLight(255, 255, 255, new p5.Vector(1, 1, 1));
  background(200, 200, 250);
  player.update();
  
  //player look
  translate(0, 60, 570);
  rotateX(165);
  noStroke();
  fill(200);
  rotateX(180);
  translate(0,-50,102.3);

  rotateX(player.lookAngle.x);
  rotateY(player.lookAngle.y);

  translate(0 + playerx ,0 + playery,-600 - playerz);

  stroke(0.0001);
  rotateX(180);
  translate(0, -400, 0);
  rotateX(90);
  fill(100)
  plane(10000);

  
  /*
  if (frameCount % 200 === 0) {
    enemies.push(new Enemy());
  }
  */


  for (let i=0; i<enemies.length;i++) {
    if (enemies.length > 0){
      enemies[i].display();
      enemies[i].update();
    }
  }

  /*
  for (let i=0;i<bullets.length;i++) {
    if (bullets.length > 0){
      bullets[i].display();
      bullets[i].update(i);
    }
  }
  */
  //bullets
  if(keyIsDown(86)){
    bullets.push(new bullet());
  }

  //package sending
  var data = {
    x: playerx,
    y: playery,
    z: playerz,
    rx: player.lookAngle.x,
    ry: player.lookAngle.y,
  }
  socket.emit('mouse', data);


    //multiplayer
    push();
    noStroke();
    fill(200);
    translate(-multx + 60, -multz - 570, -multy - 250);
    rotateZ(-multrotatey);
    //rotateX(-multrotatex)
    rotateX(90);
    sphere(100);
    rotateX(-multrotatex);
    pop();
}


  function mousePressed(){
      //bullets.push(new bullet());
      for (let i=0;i<enemies.length;i++) {
        if (enemies.length > 0){
          let c = random(0, 100);
          if (c > 88) {
            enemies[i].ccolor = true;
          }
        }
      }
  }
