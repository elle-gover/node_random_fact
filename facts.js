"use strict";


function factRefresh(){
    const facts = [
        "TERMITES CAN FART",
        "MOTHER CHICKENS TALK TO THEIR EGGS.",
        "THE PEACOCK MANTIS SHRIMP CAN THROW A PUNCH AT 50 MPH, ACCELERATING QUICKER THAN A .22-CALIBER BULLET.",
        "ONLY THE MALES ARE CALLED PEACOCKS. FEMALES ARE CALLED PEAHENS.",
        "ALBERTA, CANADA IS THE LARGEST RAT-FREE POPULATED AREA IN THE WORLD.",
        "ALL CLOWNFISH ARE BORN MALE; SOME TURN FEMALE TO ENABLE MATING.",
        "IN AN AQUATIC TRAFFIC JAM, ALLIGATORS WILL GIVE MANATEES THE RIGHT OF WAY.",
        "CARIBBEAN SPERM WHALES HAVE THEIR OWN REGIONAL ACCENT.",
        "THE CLOSEST LIVING RELATIVE TO THE TYRANNOSAURUS REX IS THE CHICKEN.",
        "STARLINGS CAN IMITATE WORDS.",
        "A SNAIL CAN SLEEP FOR THREE YEARS STRAIGHT.",
        "BATS ALWAYS TURN LEFT WHEN LEAVING A CAVE."
    ];
    
    const randomFact = facts[Math.floor(Math.random()*facts.length)];
    return randomFact;
}

module.exports = factRefresh;
