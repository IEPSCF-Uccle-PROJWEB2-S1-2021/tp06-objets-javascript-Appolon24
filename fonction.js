function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
   //voici mon code
   class Triangle {
    constructor(distance1, distance2, distance3) {
      this.distance1 = distance1;
      this.distance2 = distance2;
      this.distance3 = distance3;
    }
   
    get Perimeter() {
      return this.calcPerimeter();
    }
  
    calcPerimeter() {
      return this.distance1 + this.distance2 + this.distance3;
    }
  }
  
  const somme = new Triangle(10, 10,10);
  
  console.log(somme.Perimeter);
}
