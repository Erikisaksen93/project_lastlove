function messageView(identifier) {
    let html = '';
    let match;
    for (let i = 0; i < model.messages.length; i++) {
        if (model.messages[i].id == identifier) {
            match = model.messages[i];
            break;
        }
    }
    html += `
    <div class="mainContent">
        <div class="header">
            <button id="backToMainpageButton" onclick="mainpageView();" style="float: left;">
                Tilbake til hovedsiden
            </button>
            <h2 id="potentialMatchesHeader">
                Dette er meldingene dine med ${match.firstname}.<br> Du kan skrive en ny melding ved å trykke på tekstfeltet i bunnen av siden og skrive. Når du er fornøyd kan du trykke send.
            </h2>
        </div>
        <div class="profile">
            <div id="messageProfileImageDiv">
                <img src="${match.profile_image}" style="width:100%;height:100%;">
            </div>
        </div>
        <div class="content">
            <div class="navigate">
            
            </div>
        </div>
        <div class="footer">
            <button id="sendMessageButton">Send Melding til ${match.firstname}</button>
            <textarea id="messageTextarea" placeholder="Trykk her for å skrive melding til ${match.firstname}"></textarea>
        </div>
    </div>
    `;

    document.getElementById('app').innerHTML = html;
}