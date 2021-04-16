import Lifeform from "../src/js/Lifeform"
import PLANETS from "../src/js/data/planetarium"
import FAUNA from "../src/js/data/faunapedia"

const PLANET_NAMES = Object.keys(PLANETS)
const [MERCURY, VENUS, EARTH, MARS, JUPITER] = PLANET_NAMES

const SPECIES_NAMES = Object.keys(FAUNA)
const [HUMAN, CAT, DOG, BIRD, SPIDER] = SPECIES_NAMES

describe(`new Lifeform(age, species, homeworld)`, () => {
  it(`creates a lifeform with specified species, age, and homeworld`, () => {
    const lifeform = new Lifeform(23, HUMAN, EARTH)
    const expected = {
      age: 23,
      species: {
        id: `HUMAN`,
        adj: `Human`,
        terranLifeExpectancy: { average: 72, record: 122 },
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
    const kitty = new Lifeform(1, CAT, MARS)
    const output = kitty.cyclesSeenOf(MARS)
    expect(output).toBe(1 / 1.88)
  })
})

describe(`Lifeform.prototype.cyclesYetToSeeOf(PLANET_X)`, () => {
  it(`returns how many cycles of JUPITER I have left to see `, () => {
    const me = new Lifeform(25, HUMAN, EARTH)
    const output = me.cyclesYetToSeeOf(JUPITER)
    const expected = {
      average: (72 - 25 * 1) / 11.86,
      record: (122 - 25 * 1) / 11.86,
    }
    expect(output).toBe(expected)
  })
})
