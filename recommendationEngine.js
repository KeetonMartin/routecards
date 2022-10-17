const scoreMap = new Map();


function getCardScores(largestCarrier, lowestFareCarrier, largestCarrierMS, largestCarrierFare, lowestFareCarrierMS, lowestFareCarrierFare) {


    var cardData = JSON.parse(cardDataJSON);

    cardData.forEach(card => {
        scoreMap.set(card.name, 0)
    });

    scoreMapSerialized = JSON.stringify(Array.from(scoreMap.entries()));
    console.log("Considering cards:" + scoreMapSerialized);

    cardData.forEach(card => {
        compatibleAirlines = card.compatible_airlines

        // Give points for lowest fare compatibility
        compatibleAirlines.forEach(airline => {
            if (airline.airline_name == lowestFareCarrier) {
                incCardScore(card, (airline.compatibility_score/100)*(1000 * (largestCarrierFare/lowestFareCarrierFare)));
                // console.log("lf_ms: " + lowestFareCarrierMS)
                incCardScore(card, (400 * (lowestFareCarrierMS)));

                incCardScoreForAirlinePerks(card, airline);
            }
        });

        //give points for largest carrier compatibility
        compatibleAirlines.forEach(airline => {
            if (airline.airline_name == largestCarrier) {
                incCardScore(card, (airline.compatibility_score/100)*(1000 * (lowestFareCarrierFare/largestCarrierFare)));
                // console.log("lg_ms: " + largestCarrierMS)
                incCardScore(card, (200 * (largestCarrierMS)));

                incCardScoreForAirlinePerks(card, airline);
            }
        });

        incCardScoreForGeneralPerks(card);
    });
    
    scoreMapSerialized = JSON.stringify(Array.from(scoreMap.entries()));
    console.log("Considering cards:" + scoreMapSerialized);

    return scoreMap;
}

// function scaleCardScoreByPercent(which, amount) {
//     scoreMap.set(which, scoreMap.get(which)*cardData.get());
// }

function incCardScoreForGeneralPerks(whichCard) {
    if (whichCard.global_entry) {
        incCardScore(whichCard, 100);
    }
    if (whichCard.centurion_access) {
        incCardScore(whichCard, 150);
    }
    if (whichCard.capital_one_access) {
        incCardScore(whichCard, 50);
    }
    if (whichCard.priority_pass) {
        incCardScore(whichCard, 100);
    }

    //Sign up bonus
    // console.log("SUB:"+whichCard.SUB_value+ " whichcard: " + whichCard)
    incCardScore(whichCard, parseInt(whichCard.SUB_value)/3);
}

function incCardScoreForAirlinePerks(whichCard, airline) {
    if (airline.free_bag) {
        incCardScore(whichCard, 100);
    }
    if (airline.buddy_ticket) {
        incCardScore(whichCard, 200);
    }
    if (airline.airline_lounge_access) {
        incCardScore(whichCard, 200);
    }
    if (airline.priority_boarding) {
        incCardScore(whichCard, 50);
    }
}

function incCardScore(whichCard, amount) {
    if (amount == null) {
        // console.log("whichCard: " + whichCard.name + " amount: " + amount);
        return;
    }

    scoreMap.set(whichCard.name, scoreMap.get(whichCard.name)+amount);
}

// function cardScoresLowest(lowestFareCarrier, )