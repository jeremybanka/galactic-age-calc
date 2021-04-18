function simpleOrdinal(maybeNaturalNumber) {
  if (maybeNaturalNumber < 0 || !Number.isInteger(maybeNaturalNumber)) {
    throw new Error(`${maybeNaturalNumber} is not a natural number`)
  }
  let ordinalSuffix = `th`
  const numString = `${maybeNaturalNumber}`
  const onesAndTens = numString.slice(-2)
  const numberIsATween = [`11`, `12`, `13`].includes(onesAndTens)
  if (!numberIsATween) {
    const onesPlace = numString.slice(-1)
    ordinalSuffix = (() => {
      switch (onesPlace) {
        case `1`:
          return `st`
        case `2`:
          return `nd`
        case `3`:
          return `rd`
        default:
          return `th`
      }
    })()
  }
  return numString + ordinalSuffix
}

function pickRandom(array) {
  const randomIdx = d(array.length) - 1
  return array[randomIdx]
}

function d(howManyFaces = 2, howManyDice = 1) {
  const roll = () => Math.ceil(Math.random() * howManyFaces)
  let gross = roll()
  let rolls = 1
  while (rolls < howManyDice) {
    gross += roll()
    rolls += 1
  }
  return gross
}

export { simpleOrdinal, pickRandom, d }
