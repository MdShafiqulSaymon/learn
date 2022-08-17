class Vehicle {
    myVar = "You No need to declare any variable in class";
    constructor(col) {
        this.color = col;
    }
    sayColor() {
        console.log(this.color);
    }
}
let obj1 = new Vehicle("Red");
console.log(obj1);// pura object ar detail bolbe.
obj1.sayColor();
let obj2 = new Vehicle("Green");
obj2.sayColor();