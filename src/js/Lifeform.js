import PLANETS from "./data/planetarium.json"
import FAUNA from "./data/faunapedia.json"

export default class Lifeform {
  constructor(age, species, homeworld) {
    this.age = age
    this.species = FAUNA[species]
    this.homeworld = PLANETS[homeworld]
  }

  cyclesSeenOf(planetName) {
    const earthAge = this.age * this.homeworld.solarLapTime
    return earthAge / PLANETS[planetName].solarLapTime
  }

  nativeLifeExpectancy() {
    let { average, record } = this.species.terranLifeExpectancy
    const nativeCyclesPerTerranCycle = 1 / this.homeworld.solarLapTime
    average *= nativeCyclesPerTerranCycle
    record *= nativeCyclesPerTerranCycle
    return { average, record }
  }

  nativeCyclesYetToSee() {
    let { average, record } = this.nativeLifeExpectancy()
    average -= this.age
    record -= this.age
    return { average, record }
  }

  cyclesYetToSeeOf(planetName) {
    const { homeworld } = this
    const observedPlanet = PLANETS[planetName]
    const relativeSpeed = homeworld.solarLapTime / observedPlanet.solarLapTime
    let { average, record } = this.nativeCyclesYetToSee()
    average *= relativeSpeed
    record *= relativeSpeed
    return { average, record }
  }

  stateAgeOn(planetName) {
    const planet = PLANETS[planetName]
    const ageOnPlanet = this.cyclesSeenOf(planetName)
    return `In ${planet.adj} years, you'd be ${ageOnPlanet}.`
  }
}
