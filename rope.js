class Rope {
     constructor(bodyA, pointB) {
    var options = {
      'bodyA': bodyA,
      'pointB': pointB,
      'stiffness': 1.4,
      'length': 300
 }
 
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
 }
 
 
  fly() {
      this.rope.bodyA = null;
 }
 
  display() {
     if (this.rope.bodyA) {
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
 
      push();
      stroke("red");
      strokeWeight(5);
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
 }
 }
 }