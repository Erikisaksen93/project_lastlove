function nextPotentialMatch() {
    console.log(model.possibleMatchesIndex, model.possibleMatches.length)
    if (model.possibleMatchesIndex < model.possibleMatches.length-1) {
        model.possibleMatchesIndex++;
        potentialMatchesView();
    }
    else {
        nonePotentialMatchesView();
    }
}