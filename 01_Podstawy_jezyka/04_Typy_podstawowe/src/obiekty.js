// Tworzymy funkcję budującą



function Builder() {
  this.x = 'Hello';
}

Builder.prototype.y = 'World!';
Builder.prototype.objProp = {};

// Funkcja tak naprawdę jest konstruktorem swoich "dzieci" - jej prototyp stanie się właściwościami obiektów z niej zbudowanych
console.log(Builder === Builder.prototype.constructor); // true

const instaceObj = new Builder ()
const instaceObj2 = new Builder ()

Builder.prototype.y = 'Szymon'
instaceObj2.x = 'Goodbye'

console.log(instaceObj)
console.log(instaceObj.x, instaceObj.y)
console.log(instaceObj.objProp === Builder.prototype.objProp); // true
