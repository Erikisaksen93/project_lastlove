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
                    <div class="navigate">
                        
                    </div>
                </div>
                <div class="footer">

                </div>
            </div>
           `;

           htmlDiv.innerHTML = html;
}