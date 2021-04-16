import { Lifeform } from "../src/js/core"

describe(`new Lifeform(species, age, homeworld)`, () => {
  it(`creates a lifeform with specified species, age, and homeworld`, () => {
    const lifeform = new Lifeform(23, `HUMAN`, `EARTH`)
    const expected = {
      age: 23,
      species: {
        id: `HUMAN`,
        adj: `Human`,
        terranLifeExpectancy: [72, 122],
      },
      homeworld: {
        id: `EARTH`,
        adj: `Terran`,
        solarLapTime: 1,
      },
    }
    expect(lifeform).toEqual(expected)
  })
})
