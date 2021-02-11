

function question1(selected) {
    let questions = document.getElementById('questions');

    if (selected == 'mann') {
        model.register.genderWanted = selected;
        questions.innerHTML = `
                            <p class="navigateQuestion">Hyggelig at du søker en mann, hvilket kjønn er du?</p>
                            <button class="registerButtons" onclick="question2('mann')">Jeg er mann</button> </br>
                            <button class="registerButtons" onclick="question2('kvinne')">Jeg er kvinne</button>  
                          `;

    } else if (selected == 'kvinne') {
        model.register.genderWanted = selected;
        questions.innerHTML = `
                            <p class="navigateQuestion">Hyggelig at du søker en kvinne, hvilket kjønn er du?</p>
                            <button class="registerButtons" onclick="question2('mann')">Jeg er mann</button> </br>
                            <button class="registerButtons" onclick="question2('kvinne')">Jeg er kvinne</button>  
                          `;
    }

    
}