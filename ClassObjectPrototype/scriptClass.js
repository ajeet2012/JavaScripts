class Car {
    constructor(brandName, color){
this.brandName = brandName;
this.color = color;
    }
    start() {
        console.log(`start - ${this.brandName}`);
    }

    stop(){
        console.log(`stop ${this.color} color car`);
    }

}

let myObj = new Car("Toyota", "red");

myObj.start(); // start
myObj.stop();  // stop

// Inheritance

class Parent{
    message(){
        console.log("Parent Hello!");
    }
}

class Son extends Parent {
    sonMessage(){
        console.log("Son Hello!");
    }
}

let objSon = new Son();
