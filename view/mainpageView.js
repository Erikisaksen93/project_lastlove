
function mainpageView() {
    let html = '';
    html += `
    <div class="mainContent">
    <div class="header">

    </div>
    <div class="profile">

    </div>
    <div class="content">
        <button id="mainpageYourProfileButton" onclick="yourProfileView()">Din Profil</button>
        <button id="mainpageFindMatchButton">Søk i Single</button>
        <button id="mainpageMessagesButton">Meldinger</button>
    </div>
    <div class="footer">

    </div>
</div>
    `;
    document.getElementById('app').innerHTML = html;
}