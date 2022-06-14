class Person {
  constructor() {
    this.greeting = 'I just want to go to the club...';
  }
}

class PersonaNonGrata extends Person {
  constructor() {
    super();
    this.greeting = 'I should not be in the club...';
  }
}

class PartyGoer extends Person {
  constructor() {
    super();
    this.greeting = 'I visit the club often!'
  }
}

function selector(clubGoers) {
  // Tutaj zaimplementuj swoją logikę
  if (Array.isArray(clubGoers)) {
    if(clubGoers.some(el => el instanceof PersonaNonGrata)) return false
    if(clubGoers.every(el => el instanceof PartyGoer)) return true
  }

if (clubGoers instanceof PersonaNonGrata) return false
if (clubGoers instanceof PartyGoer) return true

}

const firstGroup = [
  new PersonaNonGrata(),
  new PartyGoer(),
  new PartyGoer(),
];
console.assert(selector(firstGroup) === false, 'Should not enter the club!');

const secondGroup = [
  new PartyGoer(),
  new PartyGoer(),
  new PartyGoer(),
];
console.assert(selector(secondGroup) === true, 'Should enter the club!');

const thirdGroup = new PersonaNonGrata();
console.assert(selector(thirdGroup) === false, 'Should not enter the club!');

const fourthGroup = new PartyGoer();
console.assert(selector(fourthGroup) === true, 'Should enter the club!');
