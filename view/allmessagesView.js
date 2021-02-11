allMessagesView();
function allMessagesView() {
    let html = '';
    html += `
    <div class="mainContent">
    <div class="header">

    </div>
    <div class="profile">

    </div>
    <div class="content">
        <div id="allMessagesDiv">
        `;
    for (let i = 0; i < model.messages.length; i++) {
        let message = model.messages[i];
        html += `
            <div class="oneMessageDiv">
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