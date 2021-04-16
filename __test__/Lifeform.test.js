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
    const kitty = new Lifeform(1, CAT, EARTH)
    const output = kitty.cyclesSeenOf(MERCURY)
    expect(output).toBe(1 / 0.24)
  })
  it(`returns how many Sol-cycles of MARS doggo saw from VENUS`, () => {
    const doggo = new Lifeform(1, DOG, VENUS)
    const output = doggo.cyclesSeenOf(MARS)
    expect(output).toBe(0.62 / 1.88)
  })
})

describe(`Lifeform.prototype.nativeLifeExpectancy()`, () => {
  it(`returns average lifetime venus sol-cycles for a venusian crow`, () => {
    const venusianCrow = new Lifeform(12, BIRD, VENUS)
    const output = venusianCrow.nativeLifeExpectancy()
    const expected = {
      average: (1 / 0.62) * 10,
      record: (1 / 0.62) * 120,
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
      to see if I were a DOG who lived on VENUS`, () => {
    const meAsVenusianDog = new Lifeform(25, DOG, VENUS)
    const output = meAsVenusianDog.cyclesYetToSeeOf(JUPITER)
    const avgLifetimeVenus = (1 / 0.62) * 10
    const rcdLifetimeVenus = (1 / 0.62) * 29
    const avgLifetimeVenusRem = avgLifetimeVenus - 25
    const rcdLifetimeVenusRem = rcdLifetimeVenus - 25
    const avgCyclesYetOfJpr = avgLifetimeVenusRem * (0.62 / 11.86)
    const recCyclesYetOfJpr = rcdLifetimeVenusRem * (0.62 / 11.86)
    const expected = {
      average: avgCyclesYetOfJpr,
      record: recCyclesYetOfJpr,
    }
    expect(output).toEqual(expected)
  })
})

describe(`Lifeform.prototype.stateAgeOn(PLANET_X)`, () => {
  it(`pretty-prints a statement about how old you'd be on X`, () => {
    const kitty = new Lifeform(1, CAT, EARTH)
    const output = kitty.stateAgeOn(MERCURY)
    expect(output).toBe(`In Mercurian years, you'd be ${1 / 0.24}.`)
  })
})

/* eslint-disable max-len */
describe(`Lifeform.prototype.stateRemainingTimeOn(PLANET_X)`, () => {
  it(`explains the prospects of a newborn Martian spider 
      on earth`, () => {
    const spiderFromMars = new Lifeform(0, SPIDER, MARS)
    const output = spiderFromMars.stateRemainingTimeOn(EARTH)
    expect(output).toBe(
      `On average, you will live 1 more Terran year. To beat the world record for your species, you'll have to live 46 more Terran years.`
    )
  })
  it(`explains the prospects of a newborn Martian spider 
      on earth`, () => {
    const spiderFromMars = new Lifeform(1.5, CAT, MARS)
    const output = spiderFromMars.stateRemainingTimeOn(EARTH)
    expect(output).toBe(
      `On average, you will live 12 more Terran years. To beat the world record for your species, you'll have to live 35 more Terran years.`
    )
  })
  it(`congratulates a Jovian bird for reaching old age`, () => {
    const jovianBirb = new Lifeform(0.86, BIRD, JUPITER)
    const output = jovianBirb.stateRemainingTimeOn(MERCURY)
    expect(output).toBe(
      `Congratulations. You have exceeded the average lifespan of your species by a whopping 1 Mercurian year. To beat the world record for your species, you'll only have to live 458 more Mercurian years. Keep it up, champ!`
    )
  })
  it(`congratulates a Martian human for barely reaching old age`, () => {
    const jovianBirb = new Lifeform(64, HUMAN, MARS)
    const output = jovianBirb.stateRemainingTimeOn(MARS)
    expect(output).toBe(
      `Congratulations. You have exceeded the average lifespan of your species by a whopping 26 Martian years. To beat the world record for your species, you'll only have to live 1 more Martian year. Keep it up, champ!`
    )
  })
  it(`congratulates the oldest person alive 
      for their sustained victory`, () => {
    const veryOldPerson = new Lifeform(509, HUMAN, MERCURY)
    const output = veryOldPerson.stateRemainingTimeOn(MERCURY)
    expect(output).toBe(
      `Wow, nice one! You defeated the previous old-age record-holder of your species by an impressive 1 Mercurian year. An average member of your species lives to be just 300 Mercurian years old. Bet you'd hate to have been dead for 209 years!`
    )
  })
  it(`congratulates the oldest spider alive 
      for their sustained victory`, () => {
    const veryOldPerson = new Lifeform(13201, SPIDER, EARTH)
    const output = veryOldPerson.stateRemainingTimeOn(EARTH)
    expect(output).toBe(
      `Wow, nice one! You defeated the previous old-age record-holder of your species by an impressive 13155 Terran years. An average member of your species lives to be just 1 Terran year old. Bet you'd hate to have been dead for 13200 years!`
    )
  })
})
/* eslint-enable max-len */
