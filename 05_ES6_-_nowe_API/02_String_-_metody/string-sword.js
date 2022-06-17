const BLADE_CHARACTER = 'Ξ';
const SWORD_PATTERN = '{}oo((X))>';

/**
 * Should generate sword with proper blade length
 */
function sword(length) {
  // First - create two string variables from sword pattern
  const weapon = new String(SWORD_PATTERN)

  const handle = weapon.substring(0, SWORD_PATTERN.length -1)
  const vertex = weapon.substring(SWORD_PATTERN.length -1, SWORD_PATTERN.length)

  // Prepare the blade

  const blade = BLADE_CHARACTER.repeat(length)

  // Glue the parts together and return whole sword
  return `${handle}${blade}${vertex}`;
}

const shortSword = sword(5);
console.assert(shortSword === '{}oo((X))ΞΞΞΞΞ>', 'Sword does not look properly: ', shortSword);

const longSword = sword(15);
console.assert(longSword === '{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>', 'Long sword does not look properly: ', longSword);
