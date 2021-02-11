let htmlDiv = document.getElementById('app');

function registerView() {
    let html = '';
    
    
    html += `
            <div class="mainContent">
                <div class="header">
                    
                </div>
                <div class="profile">
                    
                </div>
                <div class="content">
                    <h4 class="headline">Velkommen til <i>Siste kjærlighet</i> 💕</h4>
                    <div class="navigate">
                            <button class="registerButtons" data-description="search-gender-man">Jeg leter etter en mann</button> </br>
                            <button class="registerButtons" data-description="search-gender-woman">Jeg leter etter en kvinne</button>
                    </div>
                </div>
                <div class="footer">
                    
                </div>
            </div>
           `;

           htmlDiv.innerHTML = html;
}