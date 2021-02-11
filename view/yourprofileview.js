yourProfileView();
function yourProfileView() {
    let html = '';
    html += `
    <div class="mainContent">
    <div class="header">

    </div>
    <div class="profile">
        <div id="yourProfileImageDiv">
            <img src="${model.userProfile.profile_image}"  style="width:100%;height:100%;">
        </div>
        <div id="yourProfileInfo">
            
        </div>
    </div>
    <div class="content">
        <div class="navigate">
        <div>${model.userProfile.firstname}</div>
            <div>${model.userProfile.age} år</div>
            <div>${model.userProfile.gender}</div>
            <div>Søker en ${model.userProfile.genderWanted}</div>
            <div>${model.userProfile.zipcode}</div>
        </div>
        </div>
        <div class="footer">
        ${model.userProfile.description}

    </div>
</div>
    `;
    document.getElementById('app').innerHTML = html;
}