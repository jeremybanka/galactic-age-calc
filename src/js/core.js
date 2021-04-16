import PLANETS from "./data/planetarium"
import FAUNA from "./data/faunapedia"

export class Lifeform {
  constructor(age, species, homeworld) {
    this.age = age
    this.species = FAUNA[species]
    this.homeworld = PLANETS[homeworld]
  }
}
