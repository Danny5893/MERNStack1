//export and import are keywords to send/fetch files data respectively

//named export
//constant.js
export let pie = 3.1414 //named export
export let mu = .1541 //we can have multiple named exports from a file
export let phi = .1541
export let sigma = .1541

export default user = {name : "Khan", address : "Somewhere on earth"} // only one default is allowed from a file


//constant2.js
//export let pie = 6.1414 //named export


//importdata.js
import { pie, mu } from "./constant.js"; //named import using {}
import user from "./constant.js"; //only one default import allowed

import { pie as pie2 } from "./constant2.js"; //aliasing

import * as constants from "./constant.js"; //importing all named exports as constants

console.log(constants.phi)
console.log(constants.sigma)