console.log("Rock N Roll BABY!!!")


let bandNumber = 0

let takeNumber = function (name) {
    bandNumber +=1
   return bandNumber + ". " + name
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console