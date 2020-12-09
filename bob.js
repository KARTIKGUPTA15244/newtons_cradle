class Bob{
    constructor(x,y,radius){
var options = {
    isStatic:false,
restitution : 0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.circle(x,y,25,options)


//this.image = loadImage("paper.png")

World.add(world,this.body)


    }

    display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)


ellipseMode(RADIUS)
fill(254,0,255)
ellipse(0,0,25,25)
pop()
    }

}
