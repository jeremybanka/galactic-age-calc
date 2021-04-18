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
    const ageRounded = Math.round(ageOnPlanet)
    return `In ${planet.adj} years, you'd be about ${ageRounded}.`
  }

  /* eslint-disable max-len */
  stateRemainingTimeOn(planetName) {
    const planet = PLANETS[planetName]
    const remainingCycles = this.cyclesYetToSeeOf(planetName)
    const averageRemaining = Math.round(remainingCycles.average)
    const recordRemaining = Math.round(remainingCycles.record)
    console.log(averageRemaining, recordRemaining)
    const yearsAvg = Math.abs(averageRemaining) === 1 ? `year` : `years`
    const yearsRcd = Math.abs(recordRemaining) === 1 ? `year` : `years`
    if (averageRemaining > 0 && recordRemaining > 0) {
      return `On average, you will live ${averageRemaining} more ${planet.adj} ${yearsAvg}. To beat the world record for your species, you'll have to live ${recordRemaining} more ${planet.adj} ${yearsRcd}.`
    }
    if (averageRemaining <= 0 && recordRemaining > 0) {
      const overkill = -1 * Math.round(remainingCycles.average)
      const yearsOvk = overkill === 1 ? `year` : `years`
      return `Congratulations. You have exceeded the average lifespan of your species by a whopping ${overkill} ${planet.adj} ${yearsOvk}. To beat the world record for your species, you'll only have to live ${recordRemaining} more ${planet.adj} ${yearsRcd}. Keep it up, champ!`
    }
    const overkillAvg = -1 * Math.round(remainingCycles.average)
    const overkillRcd = -1 * Math.round(remainingCycles.record)
    const lifespanAvg = Math.round(
      new Lifeform(0, this.species.id, planetName).nativeLifeExpectancy().average
    )
    const yearsOvk = overkillRcd === 1 ? `year` : `years`
    const yearsLfn = lifespanAvg === 1 ? `year` : `years`
    return `Wow, nice one! You defeated the previous old-age record-holder of your species by an impressive ${overkillRcd} ${planet.adj} ${yearsOvk}. An average member of your species lives to be just ${lifespanAvg} ${planet.adj} ${yearsLfn} old. Bet you'd hate to have been dead for ${overkillAvg} years!`
  }
  /* eslint-enable max-len */
}
