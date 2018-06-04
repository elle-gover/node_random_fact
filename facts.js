"use strict";


function factRefresh(){
    const facts = [
        "Termites can fart.",
        "Mother chickens talk to their eggs",
        "Animal Fact 3",
        "Animal Fact 4",
        "Animal Fact 5",
        "Animal Fact 6",
        "Animal Fact 7",
        "Animal Fact 8",
        "Animal Fact 9",
        "Animal Fact 10"
    ];
    
    const randomFact = facts[Math.floor(Math.random()*facts.length)];
    return randomFact;
}

module.exports = factRefresh;
