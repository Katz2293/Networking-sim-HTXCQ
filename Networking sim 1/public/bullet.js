/*
class bullet{
    constructor(){
        this.x = playerx
        this.y = playery
        this.z = playerz

        this.speed = 1

        this.xangle = player.lookAngle.x
        this.yangle = player.lookAngle.y
    }
    update(){
        this.z -= sin(this.yangle)*this.speed
        this.x -= cos(this.yangle)*this.speed
        this.y -= sin(this.xangle)*this.speed
    }

    draw(){
        push()
        rotateX(90)
        rotateY(-90)
        translate(this.x, this.y, this.z + 570)
        fill(255)
        sphere(50)
        pop()
    }
}
*/

class bullet {
    constructor() {
      this.speed=10;
      this.size = 10*2;
  
      this.position = createVector(playerx,playery,playerz)
      this.velocity = createVector((player.lookAngle.x-90)/this.speed, (player.lookAngle.y)/this.speed, -this.speed);
      this.acceleration = createVector(0, 0, 0);
  
      this.difPos = [];
    }
    
    display() {
        push();
        translate(this.position.x,this.position.y,this.position.z)
        rotateX(0);
        rotateY(180);
        noStroke();
        sphere(this.size, 24, 24);
        pop();
    }
  
    update(cum) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        if(this.position.z<-2000) {
          bullets.splice(cum, 1);
        }
        for(let i=0;i<enemies.length;i++){
          if (enemies[i].z>this.position.z && enemies[i].y>this.position.y+enemies[i].size/2 && enemies[i].y>this.position.y-enemies[i].size/2 && enemies[i].x>this.position.x-enemies[i].size/2 && enemies[i].x>this.position.x+enemies[i].size/2) {
            bullets.splice(cum, 1);
            enemies.splice(i, 1);
          }
        }
      }
      
    applyForce(force) {
      this.acceleration.add(force);
    }
  }