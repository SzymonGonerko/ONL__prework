const dwarves = ['Dopey', 'Sneezy', 'Bashful', 'Doc', 'Happy', 'Grumpy', 'Sleepy'];

function hailDwarves(dwarfNames) {
  // To jest fraza początkowa. Nie zmieniaj jej!
  let phrase = 'Dinner is ready! Come home ';
  for (let [key, value] of dwarves.entries()) {
    phrase +=  value;
    key === dwarves.length -1 || key === dwarves.length -2 ? null :  phrase += ", "
    key === dwarves.length -2 ? phrase += " and " : null
  }

phrase += "!"

  console.log(phrase)
  // Tutaj umieść swoją pętlę

  return phrase;
}

console.assert(
  hailDwarves(dwarves) ===
  'Dinner is ready! Come home Dopey, Sneezy, Bashful, Doc, Happy, Grumpy and Sleepy!', 'Wrong greeting phrase:', hailDwarves(dwarves));
