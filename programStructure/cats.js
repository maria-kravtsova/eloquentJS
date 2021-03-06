'use strict';

// Objects
var cat = {
    name: 'Fluffy',
    color: 'white'
}

cat['favorite food'] = 'fishy';
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
console.log(cat.name);

// Prototype - object that exists on every function

var colors = ['red', 'blue', 'yellow', 'green'];
Object.defineProperty(Array.prototype, 'last', {get: function() {
    return this[this.length-1];
}})
console.log(colors.last);

function Animal (voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function () {
    console.log(this.voice );
}

function Cat (name, color) {
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
var Pumpkin = new Cat('Pumpkin', 'orange');
var Princess = new Cat('Princess', 'white');
Cat.prototype.age = 5
console.log(Cat.prototype);
console.log(Pumpkin.__proto__);

Pumpkin.speak();
