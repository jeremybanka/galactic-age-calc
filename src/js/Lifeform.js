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

  cyclesYetToSeeOf(PLANET) {
    return this.species.terranLifeExpectancy
  }
}
