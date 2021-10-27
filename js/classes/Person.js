export default class Person{
    constructor(name, age, favoriteColor) {
        this.name = name;
        this.age = age;
        this.favoriteColor = favoriteColor;
        this.friend = "Gerald";
    }

    birthday() {
        this.age++;
        console.log(this.age);
    }
}