//La class enumeré y compris son contructeur et ses propriétés

class Shape {
    constructor(distance1, distance2, distance3) {
        this.distance1 = distance1;
        this.distance2 = distance2;
        this.distance3 = distance3;
      }
   
    calcPerimeter() {
        return this.distance1 + this.distance2 + this.distance3;
      }
    }
  
    class Square extends Shape {
        constructor(distance1, distance2, distance3) {
           super(distance1, distance2, distance3) {