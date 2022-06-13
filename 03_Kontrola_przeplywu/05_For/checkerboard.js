
// Przykład funkcji modulo
console.log('Modulo examples: ');
console.log(3 % 2);
console.log(15 % 2);
console.log(10 % 2);

function generateCheckerboard(times, blackTileChar, whiteTileChar) {
    for (let i = 0; i < times; i++) {
        let chessboard = [];
        for (let j = 0; j < times; j++) {
            if ( (i + j) % 2 === 0) {
                chessboard.push(blackTileChar)
            } else {
                chessboard.push(whiteTileChar)
            }
        }
        console.log(chessboard.join(""))
    }

}

console.log('\n/**************/');
console.log('| CHECKERBOARD |');
console.log('/**************/');

generateCheckerboard(30, '#', '_');
