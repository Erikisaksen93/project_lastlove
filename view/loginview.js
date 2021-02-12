function loginView() {
    let html = '';

    html = `
            <div class="mainContent">
            <img id="loginImage" src="./images/hands.jpg">
                <div class="header">

                </div>
                <div class="profile">
                    
                </div>
                <div class="content">
                    <h4 class="headline">Velkommen til <i>Siste kjærlighet</i> 💕</h4>
                    <h3 class="headline2">En dating side for <span id="emp">de over 60.</span></h3>
                    <div class="navigate">
                            <label for="epost" class="inputLabel">E-post</label></br>
                            <input type="text" class="inputForLogin" /> </br>
                            <label for="password" class="inputLabel">Passord</label></br>
                            <input type="password" class="inputForLogin" /> </br>
                            <button class="registerButtons">Logg inn</button>
                    </div>
                </div>
                <div class="footer">
                    
                </div>
            </div>
           `;
           htmlDiv.innerHTML += html;
}