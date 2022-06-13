// Możesz użyć tego obiektu jako bazy do kolejnych ptaków
const birdSpeciesObj = {
  species: '',
  dominantColor: '',
  size: '' // small || medium || large
};

const birdsInfo = {
  tit: {
    species: "tit",
    dominantColor: "yellow",
    size: "medium"
  },
  sparrow: {
    species: "sparrow",
    dominantColor: "grey",
    size: "small"
  },
  woodpecker: {
    species: "woodpecker",
    dominantColor: "black",
    size: "medium"
  },
  falcon: {
    species: "falcon",
    dominantColor: "brown",
    size: "large"
  }

}

function reportBird(date, certainty) {
  if (!(date instanceof Date)) {
    throw new Error('Passed date is not a proper Date object!');
  }

  if (certainty < 0 || certainty > 1) {
    throw new Error('Recognition certainty has to be between 0 and 1');
  }

  if (!this.species) {
    throw new Error('No context bound for recognition - add a proper bird species context!');
  }


  console.log(
    '[' + date + '] Identified bird: ' + this.species +
    ', dominant color: ' + this.dominantColor +
    ', size: ' + this.size +
    ', recognition certainty: ' + certainty
  )
}

reportBird.call(birdsInfo.tit, new Date(), 0.5)
reportBird.call(birdsInfo.sparrow, new Date(), 0.1)
reportBird.call(birdsInfo.woodpecker, new Date(), 0.999)
reportBird.call(birdsInfo.falcon, new Date(), 0.5)

reportBird.apply(birdsInfo.tit, [new Date(), 0.5])
reportBird.apply(birdsInfo.sparrow, [new Date(), 0.1])
reportBird.apply(birdsInfo.woodpecker, [new Date(), 0.999])
reportBird.apply(birdsInfo.falcon, [new Date(), 0.5])