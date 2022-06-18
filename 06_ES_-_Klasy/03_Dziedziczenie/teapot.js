class Vessel {
  constructor(capacity) {
    this.capacity = capacity || 500; // Default - 500ml
    this.waterAmount = 0; // Default water amount - empty vessel
  }

  /**
   * Pours water till vessel is full
   * If amount is bigger than capacity, it fills it completely
   */
  pourWater(amount) {
    this.waterAmount = amount >= this.capacity ?
      amount :
      this.capacity - amount;
  }

  /**
   * Empties the vessel
   */
  emptyWater() {
    this.waterAmount = 0;
  }
}

// MODIFY THIS CLASS - it should extend Vessel and satisfy the test cases
class Teapot extends Vessel {
  constructor(capacity) {
    super(capacity)
    this.greeting = 'I am a teapot'
    this.isBoiled = false
  }

greet() {
  return this.greeting
}

boil () {
  this.isBoiled = true
}

pourWater(amount) {
  super.pourWater(amount);
  this.isBoiled = false;
}

emptyWater() {
  super.emptyWater();
}

makeTea(howBig) {
  if (this.waterAmount < howBig) {
    return 'Not enough water, please refill me'
  } else if (!this.isBoiled) {
    return 'Water is cold, cannot make tea';
  } else {
    this.waterAmount = this.waterAmount - howBig;
    return "Poured " + howBig + " ml of tea";
  }

}

}

const teapot = new Teapot(700);


// Greeting test
console.assert(teapot.greet && teapot.greet() === 'I am a teapot', 'Wrong greeting: ', teapot.greet && teapot.greet() );

// Make tea - not enough water
const refillPhrase = teapot.makeTea && teapot.makeTea(100)
console.assert(refillPhrase === 'Not enough water, please refill me', 'Should show refill request: ', refillPhrase);

//  Make tea - water is cold
teapot.pourWater && teapot.pourWater(1000);
const coldWaterPhrase = teapot.makeTea && teapot.makeTea(100);
console.assert(coldWaterPhrase === 'Water is cold, cannot make tea', 'Should show cold water message: ', coldWaterPhrase);

// Proper pouring
teapot.boil && teapot.boil();
const pouredPhrase = teapot.makeTea && teapot.makeTea(100);
console.assert(pouredPhrase === 'Poured 100 ml of tea', 'Should show poured message: ', pouredPhrase);

// Not enough water - when requesting for too much
const refillPhrase2 = teapot.makeTea && teapot.makeTea(1000);
console.assert(refillPhrase2 === 'Not enough water, please refill me', 'Should show refill request: ', refillPhrase2);
