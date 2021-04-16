import PLANETS from "./data/planetarium"
import FAUNA from "./data/faunapedia"

export default class Lifeform {
  constructor(age, species, homeworld) {
    this.age = age
    this.species = FAUNA[species]
    this.homeworld = PLANETS[homeworld]
  }

  cyclesSeenOf(PLANET) {
    return this.age / PLANETS[PLANET].solarLapTime
  }

  cyclesYetToSeeOf(planetName) {
    const planet = PLANETS[planetName]
    let { average, record } = this.species.terranLifeExpectancy
    const nativeCyclesPerTerranCycle = 1 / this.homeworld.solarLapTime
    average *= nativeCyclesPerTerranCycle
    record *= nativeCyclesPerTerranCycle
    const nativeLifeExpectancy = { average, record }
    console.log(nativeCyclesPerTerranCycle)
    const remainingNativeLifeExpectancy = {
      average: nativeLifeExpectancy.average - this.age,
      record: nativeLifeExpectancy.record - this.age,
    }
    console.log(remainingNativeLifeExpectancy)
    const relativeSpeed = this.homeworld.solarLapTime / planet.solarLapTime
    console.log(this.homeworld)
    console.log(planet)

    const cyclesYet = {
      average: remainingNativeLifeExpectancy.average * relativeSpeed,
      record: remainingNativeLifeExpectancy.record * relativeSpeed,
    }

    return cyclesYet
  }
}
