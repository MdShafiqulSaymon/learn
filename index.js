var a = 45;
console.log(a);
let b = "saymon";
console.log(b);
function sayHello(num) {
    console.log("Hello World");
    console.log("The Number is ", num);
}
let saySomething = () => {
    console.log("I am arrow Function");
}
let calc = (sq) => {
    return sq * sq;
}
function calc2(sq) {
    return sq * sq;
}
saySomething();
sayHello(3);
console.log(calc(3));
console.log(calc2(5));