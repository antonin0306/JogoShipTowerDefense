class Canhao {
    constructor (x,y,w,h,a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.canhaoBase = loadImage ("assets/cannonBase.png")
        this.canhao = loadImage ("assets/canon.png")
    }
    show () {
        push()
        translate(this.x,this.y)
        rotate(this.a)
        imageMode(CENTER)
        image(this.canhao,0,0,this.w,this.h)
        pop()
        image(this.canhaoBase,70,20,200,200)
        noFill()
    }
}
