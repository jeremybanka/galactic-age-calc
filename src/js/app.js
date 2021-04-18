// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import { simpleOrdinal, whichever, d } from "./util"
import Lifeform from "./Lifeform"
// DATA
import FAUNA from "./data/faunapedia.json"
import PLANETS from "./data/planetarium.json"

const PLANET_NAMES = Object.keys(PLANETS)
const SPECIES_NAMES = Object.keys(FAUNA)

const yourSpecies = whichever(SPECIES_NAMES)
const yourPlanet = whichever(PLANET_NAMES)
const yourAge = d(100)
const ageOrdinal = simpleOrdinal(yourAge)

const lifeform = new Lifeform(yourAge, yourSpecies, yourPlanet)

const statements = [
  `You are a ${yourSpecies} living on ${yourPlanet}.`,
  `Today is your ${ageOrdinal} ${lifeform.homeworld.adj} birthday.`,
  `Happy birthday, by the way!`,
  ...(() => {
    const comparisons = []
    for (const planetName of PLANET_NAMES) {
      if (planetName === yourPlanet) continue
      comparisons.push(lifeform.stateAgeOn(planetName))
    }
    return comparisons
  })(),
  `Pretty impressive lifespan for a ${yourSpecies}!`,
  `Now let me think...`,
  lifeform.stateRemainingTimeOn(lifeform.homeworld.id),
]

$(() => {
  console.log(statements.shift())
  $(`<button/>`).text(`OK`).appendTo(`body`)
  $(`button`).on(`click`, () => {
    if (statements.length > 0) {
      console.log(statements.shift())
    } else {
      $(`button`).on(`mousedown`, () => {
        /* eslint-disable no-restricted-globals */
        location.reload()
        /* eslint-enable no-restricted-globals */
      })
      console.log(`Please reload the page to try again!`)
    }
  })
})
