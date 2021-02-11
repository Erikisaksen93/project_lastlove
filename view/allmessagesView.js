function allMessagesView() {
    let html = '';
    html += `
    <div class="mainContent">
    <div class="header">
        <button id="backToMainpageButton" onclick="mainpageView();" style="float: left;">Tilbake til hovedsiden</button>
        <h2 id="potentialMatchesHeader">Her kan du se alle som du har skrevet meldinger med. Listen under er sortert etter hvem du nylig har sendt meldinger med.</h2>
    </div>
    <div class="profile">
        <h2 style="margin: 50px 0 0 10px;">Ønsker du å se alle meldingene du har med en person, eller skrive en melding, så clicker du på personen du ønsker til høyre.</h2>
    </div>
    <div class="content">
        <div id="allMessagesDiv">
        `;
    for (let i = 0; i < model.messages.length; i++) {
        let message = model.messages[i];
        html += `
            <div class="oneMessageDiv" onclick="messageView('${message.id}')">
                <div class="allMessagesImageDiv"><img src="${message.profile_image}" style="width: 100%;height:100%;"></div>
                <div class="allMessagesName">${message.firstname}</div>
                <div class="allMessagesLastMessage">${message.lastSentMessage}</div>
            </div>
        `;
    }

        html += `    
        </div>
    </div>
    <div class="footer">

    </div>
    </div>
    `;

    document.getElementById('app').innerHTML = html;
}