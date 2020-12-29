class Chain{
constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:20,
}
this.pointB = pointB;
this.chain = Constraint.create(options);
World.add(world,this.chain);
}
fly(){
this.chain.bodyA = null;    
}

//attach(body){
//this.chain.bodyA = body;    
//}
display(){
if(this.chain.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke(0);
    strokeWeight(10);
    line(pointA.x-25, pointA.y, pointB.x - 25, pointB.y+15);
    line(pointA.x-25, pointA.y, pointB.x + 15, pointB.y+10);
    image(this.sling3,pointA.x-30,pointA.y-15,15,30);
    pop();          
}    
}
}