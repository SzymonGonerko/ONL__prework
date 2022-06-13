/**
 * Zwraca kombinację dwóch sylab
 * @param firstSyllable - jaka ma być pierwsza sylaba
 * @param secondSyllable - jaka ma być druga sylaba
 * @returns {string}
 */
function foobar(firstSyllable, secondSyllable) {
     const first = firstSyllable == true ? "foo" : "bar"
    const sec = secondSyllable == false ? "bar" : "foo"
    return first + sec
   
}

console.assert(foobar(true, true) === 'foofoo', 'Wrong phrase!');
console.assert(foobar(true, false) === 'foobar', 'Wrong phrase!');
console.assert(foobar(false, true) === 'barfoo', 'Wrong phrase!');
console.assert(foobar(false, false) === 'barbar', 'Wrong phrase!');
