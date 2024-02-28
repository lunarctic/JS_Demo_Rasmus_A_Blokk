/*
 * Sorterings-funksjoner:
 */
/* med sort funksjonen henter den inn alltid to elementer, i dette tilfellet to kort*/
function sammenliknKortEtterTall(kortA, kortB) {
    console.log("kortA: " + kortA)
    console.log("kortB: " + kortB)
    console.log(kortA)
    tallA = parseInt(kortA) // Henter ut tallverdien av kort a
    console.log(tallA)
    tallB = parseInt(kortB) // Henter ut tallverdien av kort b
    // Vil at Ess teller som høyeste kort:
    if (tallA == 1) {
        tallA = 14
    }
    if (tallB == 1) {
        tallB = 14
    }
    console.log("the difference: " + (tallA - tallB))
    return tallA - tallB /* det blir plutselig motsatt sorteringsvei når man endrer tallA og tallB*/
}


// Skal sammenligne strenger som ser slik ut:
// "1_of_clubs"
// "12_of_spades"
function sammenliknKortEtterTallOgType(kortA, kortB){
    
}
function sammenliknKortEtterTekst (kortA, kortB){
    return kortA.localeCompare(kortB)
}


