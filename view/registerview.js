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
                    <h4>Velkommen til <i>Siste kjærlighet</i> 💕</h4>
                    <div class="navigate">
                        <form action="#">
                        
                        </form>
                    </div>
                </div>
                <div class="footer">
                    
                </div>
            </div>
           `;

           htmlDiv.innerHTML = html;
}