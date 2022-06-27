class BolaDeCanhao {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.isSink = false;
      this.speed = 0.05;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/cannonball.png");
      this.animation = [this.image];
      World.add(world, this.body);
    }
    animate() {
      this.speed += 0.05;
    }
  
  
    display() 
    {
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.animation[index], 0, 0, this.r, this.r);
      pop();
    }
    throw () {
      var angulodocanhao = canhao.a -28
      angulodocanhao = angulodocanhao*(Math.PI/180)
      var velocity = p5.Vector.fromAngle(angulodocanhao)
      velocity.mult(0.5)
      Matter.Body.setStatic(this.body,false)
      Matter.Body.setVelocity(this.body,{
        x:velocity.x*(180/Math.PI),y:velocity.y*(180/Math.PI),
      })
    }
    remove(bola) {
      this.isSink = true
      Matter.Body.setVelocity(this.body,{x:0,y:0})
      this.animation = waterSplashAnimation;
      this.speed = 0.05;
      this.r = 150;

      setTimeout(() => {
        Matter.World.remove(world,this.body)
        delete bolas[bola]
      }, 1000);
    }
  }