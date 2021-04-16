import { Lifeform } from "../src/js/core"
import PLANETS from "../src/js/data/planetarium"

const [MERCURY, VENUS, EARTH, MARS, JUPITER] = Object.keys(PLANETS)

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

describe(`Lifeform.prototype.cyclesSeenOf(PLANET_X)`, () => {
  it(`returns how many Sol-cycles of MARS kitty saw from EARTH`, () => {
    const kitty = new Lifeform(1, `CAT`, `EARTH`)
    const output = kitty.cyclesSeenOf(MARS)
    expect(output).toBe(1.88)
  })
})
