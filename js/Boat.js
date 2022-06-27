class Boat {
    constructor(x, y, width, height, boatPos, boatAnimation) {
      this.animation = boatAnimation;
      this.speed = 0.05;
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.isBroken = false;
  
      //this.image = loadImage("./assets/boat.png");
      this.boatPosition = boatPos;
      World.add(world, this.body);
    }
    animate() {
      this.speed += 0.05;
    }
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.boatPosition, this.width, this.height);
      pop();
    }
    remove(navio) {
      this.animation = brokenBoatAnimation;
      this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    this.isBroken = true;
      setTimeout(() => {
        Matter.World.remove(world,this.body)
        delete navios[navio]
      }, 1000);
    }
  }