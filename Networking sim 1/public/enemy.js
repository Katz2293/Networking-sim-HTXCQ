class Enemy {
    constructor() {
        this.x = random(-4800,4800);
        this.y = 5000;
        this.z =  random(-4900,150);

        this.size = 400;
        
        this.speed = 10;
    
        this.difPos = [];

        this.ccolor = false;
        this.daddyv1 = 0;
        this.daddyv2 = 0;
        this.daddyv3 = 0;

        
    }
  
    display() {
        push();
        translate(this.x,this.y,this.z)
        if (this.ccolor == true) {
            this.daddyv1 = random(0,255);
            this.daddyv2 = random(0,255);
            this.daddyv3 = random(0,255);
            this.ccolor = false;
        }
        fill(this.daddyv1, this.daddyv2, this.daddyv3);
        sphere(this.size, 24, 24);
        pop();
    }
    
    update() {
        /*
        if (playerx < this.x) {
            this.x =- this.speed;
        } else {
            this.x =+ this.speed
        }
        if (playerz < this.z) {
            this.z =- this.speed;
        } else {
            this.z =+ this.speed
        }
        if (playery < this.y) {
            this.y =- this.speed;
        } else {
            this.y =+ this.speed
        }
        */
    }
  
    calcDist() {
        this.difPos[0] = this.x - cam.eyeX;
        this.difPos[1] = this.y - cam.eyeY;
        this.difPos[2] = this.z - cam.eyeZ;

        this.enemyDist = sqrt(this.difPos[0]^2+this.difPos[2]^2+this.difPos[2]^2)
        return this.enemyDist;
    }
  }