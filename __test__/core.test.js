import { pickRandom, d } from "../src/js/core"

describe(`pickRandom(array)`, () => {
  it(`rolls a die with 6 faces and returns the result`, () => {
    const nums = [6, 12, 65, 1]
    const result = pickRandom(nums)
    const gotOne = nums.includes(result)
    expect(gotOne).toBe(true)
  })
})

describe(`d(howManyFaces, howManyDice)`, () => {
  it(`flips a coin and returns 1 for heads, 2 for tails`, () => {
    const result = d()
    const resultIsWithinBounds = result <= 2 && result >= 1
    expect(resultIsWithinBounds).toBe(true)
  })
  it(`rolls a die with 6 faces and returns the result`, () => {
    const result = d(6)
    const resultIsWithinBounds = result <= 6 && result >= 1
    expect(resultIsWithinBounds).toBe(true)
  })
  it(`rolls two D4s (dice with 4 faces) and returns the total`, () => {
    const result = d(4, 2)
    const resultIsWithinBounds = result <= 8 && result >= 2
    expect(resultIsWithinBounds).toBe(true)
  })
})
