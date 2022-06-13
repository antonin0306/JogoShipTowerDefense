class BolaDeCanhao {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/cannonball.png");
      World.add(world, this.body);
    }
  
  
    display() 
    {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
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
  }