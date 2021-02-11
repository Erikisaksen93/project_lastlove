let questions = document.getElementById('questions');


const getZip = (value) => {
    model.register.zipcode = value;
}


function question1(selected) {

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
};

function question2(selected) {
    
    if (selected == 'mann') {
        model.register.genderWanted = selected;
        questions.innerHTML = `
                            <p class="navigateQuestion">Det er notert 😇. </br> Hva er post-nummeret ditt?</p>
                            <input onchange="getZip(this.value);" class="inputForQuestions" type="text" placeholder="ZIP" /> </br>
                            <button class="registerButtons" onclick="question3()">Gå videre</button>
                          `;
    };

    if (selected == 'kvinne') {
        model.register.genderWanted = selected;
        questions.innerHTML = `
                            <p class="navigateQuestion">Det er notert 😇. </br> Hva er post-nummeret ditt?</p>
                            <input onchange="getZip(this.value);" class="inputForQuestions" type="text" placeholder="ZIP" /> </br>
                            <button class="registerButtons" onclick="question3()">Gå videre</button>
                          `;
    };
};

function question3() {
    
        questions.innerHTML = `
                            <p class="navigateQuestion">Det er notert 😇. </br> Hva er post-nummeret ditt?</p>
                            <input onchange="getZip(this.value);" class="inputForQuestions" type="text" placeholder="ZIP" /> </br>
                            <button class="registerButtons" onclick="question3()">Gå videre</button>
                          `;
};