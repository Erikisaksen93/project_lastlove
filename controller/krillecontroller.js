function nextPotentialMatch() {
    if (model.possibleMatchesIndex <= model.possibleMatches.length) {
        model.possibleMatchesIndex++;
        potentialMatchesView();
    }
    else {
        
    }
}