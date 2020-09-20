class Dog {

}

class Human {
    hurt(obj){
        console.log("hurt by", obj);   
    }
}

const dog = new Dog();

const me = new Human();

me.hurt(dog);