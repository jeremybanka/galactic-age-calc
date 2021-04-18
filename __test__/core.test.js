import { whichever, d, simpleOrdinal } from "../src/js/core"

describe(`simpleOrdinal(maybeNaturalNumber)`, () => {
  it(`errors if it sees a negative int`, () => {
    expect(() => {
      simpleOrdinal(-1)
    }).toThrow(Error)
  })
  it(`errors if it sees a float`, () => {
    expect(() => {
      simpleOrdinal(1.01)
    }).toThrow(Error)
  })
  it(`gives '1st' for 1`, () => {
    expect(simpleOrdinal(1)).toBe(`1st`)
  })
  it(`gives '32nd' for 32`, () => {
    expect(simpleOrdinal(32)).toBe(`32nd`)
  })
  it(`gives '333rd' for 333`, () => {
    expect(simpleOrdinal(333)).toBe(`333rd`)
  })
  it(`gives '177th' for 177`, () => {
    expect(simpleOrdinal(177)).toBe(`177th`)
  })
  it(`gives '11th' for 11`, () => {
    expect(simpleOrdinal(11)).toBe(`11th`)
  })
  it(`gives '12th' for 12`, () => {
    expect(simpleOrdinal(12)).toBe(`12th`)
  })
  it(`gives '13th' for 13`, () => {
    expect(simpleOrdinal(13)).toBe(`13th`)
  })
})

describe(`whichever(array)`, () => {
  it(`returns a random thing from that array`, () => {
    const nums = [6, 12, 65, 1]
    const result = whichever(nums)
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
