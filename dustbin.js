class Dustbin{
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,
             'restitution':0,
             'friction':1.0,
             'density':1.0
         }
     this.body= Bodies.rectangle(x,y,width,height,options)
     this.width=width;
     this.height=height;
     World.add(world,this.body); 
     this.image=loadImage('dustbingreen.png')
    }
    display(){
        var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       fill(255); 
        rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)
       image(this.image,this.body.position.x-130,this.body.position.y-268,225,280)
        pop();
      }
}

