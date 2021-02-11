function yourProfileView() {
    let html = '';
    html += `
    <div class="mainContent">
    <div class="header">
        <button id="backToMainpageButton" onclick="mainpageView()" style="float: left;">Tilbake til hovedsiden</button>
        <h2 id="yourProfileHeader">Dette er hvordan alle andre ser profilen din. Hvis det er noe du vil endre på så kan du trykke på det du vil endre.</h2>
    </div>
    <div class="profile">
        <div id="yourProfileImageDiv">
            <img src="${model.userProfile.profile_image}"  style="width:100%;height:100%;">
        </div>
    </div>
    <div class="content">
        <div id="yourProfileInfo">
            <div id="" class="userProfileInfo">${model.userProfile.firstname}</div>
            <div id="" class="userProfileInfo">${model.userProfile.age} år</div>
            <div id="" class="userProfileInfo">${model.userProfile.gender}</div>
            <div id="" class="userProfileInfo">Søker en ${model.userProfile.genderWanted}</div>
            <div id="" class="userProfileInfo">${model.userProfile.zipcode}</div>
            <div id="userProfileDescription" class="userProfileInfo">Litt om meg:<br><br>${model.userProfile.description}</div>
        </div>
    </div>
    <div class="footer">
    </div>
</div>
    `;
    document.getElementById('app').innerHTML = html;
}