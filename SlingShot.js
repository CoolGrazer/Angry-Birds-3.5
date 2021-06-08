class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Point created to be a link in the constraint
        this.pointB = pointB;
        //Creation of the constraint
        this.slingshot = Constraint.create(options);
        //Adding it to the world
        World.add(world, this.slingshot);
    }
    fly()
    {
        //Making the other part of the constraint null, allowing the bird to fly
        this.slingshot.bodyA = null;
    }
    

    display(){
    //If the object in the contrasint isn't null, then the rest of the code will run.
        if(this.slingshot.bodyA !== null)
        {
            //Namespacing
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        //draws a line between bodyA and pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}