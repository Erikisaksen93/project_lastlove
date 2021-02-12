function nonePotentialMatchesView() {
    let match = model.possibleMatches[model.possibleMatchesIndex];
    let html = '';
    html += `
        <h1 id="nonePotentialMatchesHeader">Det er ikke flere single tilgjengelige for øyeblikket.<br>Kom tilbake senere og se om det har kommet noen flere.</h1>
        <button id="nonePotentialHomeButton" mainpageView()>Tilbake til hovedsiden</button>
    `;
    document.getElementById('app').innerHTML = html;
}