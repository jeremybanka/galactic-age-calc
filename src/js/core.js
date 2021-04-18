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

export { pickRandom, d }
