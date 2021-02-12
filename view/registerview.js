let htmlDiv = document.getElementById('app');

function registerView() {
    let html = '';

    html = `
            <div class="mainContent">
            <img id="loginImage" src="./images/hands.jpg">
                <div class="header">
                    <button class="loginButton" onclick="loginView();">Logg inn</button>
                </div>
                <div class="profile">
                    
                </div>
                <div class="content">
                    <h4 class="headline">Velkommen til <i>Siste kjærlighet</i> 💕</h4>
                    <h3 class="headline2">En dating side for <span id="emp">de over 60.</span></h3>
                    <div class="navigate">
                        <div id="questions">
                            <p class="navigateQuestion">
                                Hva leter du etter?
                            </p>
                            <button class="registerButtons" onclick="question1('mann')">Jeg leter etter en mann</button> </br>
                            <button class="registerButtons" onclick="question1('kvinne')">Jeg leter etter en kvinne</button>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    
                </div>
            </div>
           `;
           htmlDiv.innerHTML += html;
};


