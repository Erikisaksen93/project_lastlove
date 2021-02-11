
function mainpageView() {
    let html = '';
    html += `
    <div class="mainContent">
    <div class="header">

    </div>
    <div class="profile">

    </div>
    <div class="content">
        <div class="navigate">
            <button id="mainpageYourProfileButton">Din Profil</button>
            <button id="mainpageFindMatchButton">Søk i Single</button>
            <button id="mainpageMessagesButton">Meldinger</button>
        </div>
    </div>
    <div class="footer">

    </div>
</div>
    `;
    document.getElementById('app').innerHTML = html;
}