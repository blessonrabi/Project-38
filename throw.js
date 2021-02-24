class Throw{
    constructor(body,anchor) { var options={ bodyA:body, pointB:anchor, stiffness:0.004, length:1 } 
    this.bodyA=body 
    this.pointB=anchor
     this.throw=Constraint.create(options) 
     World.add(world,this.throw) } 
     attach(body){ this.throw.bodyA=body; }
      fly() { 
    this.throw.bodyA=null;
     } 
    display() { if(this.throw.bodyA) { var pointA=this.bodyA.position; var pointB=this.pointB
    strokeWeight(2);
     line(pointA.x,pointA.y,pointB.x,pointB.y); } }

}