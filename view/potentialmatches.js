// potentialMatchesView();
function potentialMatchesView() {
    let match = model.possibleMatches[model.possibleMatchesIndex];
    let html = '';
    html += `
    <div class="mainContent">
        <div class="header">
            <button id="backToMainpageButton" onclick="mainpageView()" style="float: left;">Tilbake til hovedsiden</button>
            <h2 id="potentialMatchesHeader">Dette er profilen til ${match.firstname}.<br> Syntes du ${match.firstname} virket interessant, la ${match.gender == 'Kvinne' ? 'henne' : 'han'} få vite det ved å trykke på hjertet nederst til venstre. <br>Du kan også trykke på Meldingknappen nederst til høyre for å sende en melding til ${match.firstname}</h2>
        </div>
        <div class="profile">
        <div id="yourProfileImageDiv">
        <img src="${match.profile_image}" style="width:100%;height:100%;">
    </div>
        </div>
        <div class="content">
            <div class="navigate">
                <div id="" class="userProfileInfo">${match.firstname}</div>
                <div id="" class="userProfileInfo">${match.age} år</div>
                <div id="" class="userProfileInfo">${match.gender}</div>
                <div id="" class="userProfileInfo">Søker en ${match.genderWanted}</div>
                <div id="" class="userProfileInfo">${match.zipcode}</div>
                <div id="userProfileDescription" class="userProfileInfo">Litt om meg:<br><br>${match.description}</div>
                <button id="potentialMatchesNextButton">Neste Single</button>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
    `;

    document.getElementById('app').innerHTML = html;
}