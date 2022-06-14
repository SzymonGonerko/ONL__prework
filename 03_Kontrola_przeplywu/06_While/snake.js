function generateSnake(lines, length) {
  // Używana do śledzenia aktualnego rzędu
  let currentRow = 0;

  while (currentRow < lines) {
    let snakeRow = ``;
    if (currentRow === 0) {
      // Zaczynamy od głowy
      snakeRow += '>-8';
    } else if (currentRow % 2 !== 0) {
      snakeRow += '┌';
    } else if (currentRow % 2 === 0) {
      snakeRow += '└';
    }

    let currentLength = snakeRow.length + 1; // Dodajemy jeden, tak aby pominąć znaki końca linii (dodane dalej
    while (currentLength < length) {
      snakeRow+='─';
      currentLength++;
    } 

    // Tutaj dodajemy znaki zakończenia linijki - wąż zazkręca
    if (currentRow % 2 !== 0) {
      snakeRow += '┘';
    } else if (currentRow % 2 === 0) {
      snakeRow += '┐';
    }

    // Inkrementujemy numer rzędu
    currentRow++;

    // Drukujemy "linijkę" węża
    console.log(snakeRow);
  } while (currentRow < lines);
}

generateSnake(10, 10);
console.log('*********');
generateSnake(0, 5);
