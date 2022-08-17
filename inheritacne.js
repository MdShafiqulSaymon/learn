class Vehicle {
    myVar = "You No need to declare any variable in class";
    constructor(col, pass) {
        this.color = col;
        this.passenger = pass;
    }
    sayColor() {
        console.log(this.color);
    }
}
class car extends Vehicle {
    constructor(num_wheel, pass, col) {
        super(col, pass);// is copy of parent constractor//
        this.wheel = num_wheel;
    }
}
let obj = new car(4, 6, "green");
console.log(obj);