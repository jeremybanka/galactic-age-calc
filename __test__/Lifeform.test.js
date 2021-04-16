import Lifeform from "../src/js/Lifeform"
import PLANETS from "../src/js/data/planetarium.json"
import FAUNA from "../src/js/data/faunapedia.json"

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
  it(`returns how many Sol-cycles of MERCURY kitty saw from EARTH`, () => {
    const kitty = new Lifeform(1, CAT, MERCURY)
    const output = kitty.cyclesSeenOf(MERCURY)
    expect(output).toBe(1 / 0.24)
  })
})

describe(`Lifeform.prototype.nativeLifeExpectancy()`, () => {
  it(`returns average lifetime venus sol-cycles for a venusian crow`, () => {
    const venusianCrow = new Lifeform(12, BIRD, VENUS)
    const output = venusianCrow.nativeLifeExpectancy()
    const expected = {
      average: (1 / 0.65) * 10,
      record: (1 / 0.65) * 120,
    }
    expect(output).toEqual(expected)
  })
})

describe(`Lifeform.prototype.nativeCyclesYetToSee()`, () => {
  it(`returns how many mars years a martian spider might remain for`, () => {
    const spiderFromMars = new Lifeform(0.5, SPIDER, MARS)
    const output = spiderFromMars.nativeCyclesYetToSee()
    const expected = {
      average: (1 / 1.88) * 1 - 0.5,
      record: (1 / 1.88) * 46 - 0.5,
    }
    expect(output).toEqual(expected)
  })
})

describe(`Lifeform.prototype.cyclesYetToSeeOf(PLANET_X)`, () => {
  it(`returns how many cycles of JUPITER I have left to see`, () => {
    const me = new Lifeform(25, HUMAN, EARTH)
    const output = me.cyclesYetToSeeOf(JUPITER)
    const expected = {
      average: 72 / 11.86 - 25 / 11.86,
      record: 122 / 11.86 - 25 / 11.86,
    }
    expect(output).toEqual(expected)
  })
  it(`returns how many cycles of JUPITER I'd have left 
      to see if I were a DOG measuring my age by cycles
      of VENUS`, () => {
    const meAsVenusianDog = new Lifeform(25, DOG, VENUS)
    const output = meAsVenusianDog.cyclesYetToSeeOf(JUPITER)
    const avgLifetimeVenus = (1 / 0.65) * 10
    const rcdLifetimeVenus = (1 / 0.65) * 29
    const avgLifetimeVenusRem = avgLifetimeVenus - 25
    const rcdLifetimeVenusRem = rcdLifetimeVenus - 25
    const avgCyclesYetOfJpr = avgLifetimeVenusRem * (0.65 / 11.86)
    const recCyclesYetOfJpr = rcdLifetimeVenusRem * (0.65 / 11.86)
    const expected = {
      average: avgCyclesYetOfJpr,
      record: recCyclesYetOfJpr,
    }
    console.log(expected)
    expect(output).toEqual(expected)
  })
})
