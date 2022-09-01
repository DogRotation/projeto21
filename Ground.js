class Ground {

    

    constructor(x,y,w,h,){
        var GroundOptions = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,GroundOptions);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("red");
        fill("green");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}