let questions;

const getZip = (value) => {
    model.register.zipcode = parseInt(value);
};

const getFirstname = (value) => {
    model.register.firstname = value;
};

const getSurname = (value) => {
    model.register.surname = value;
}

const getDateOfBirth = (value) => {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    model.register.age = (currentYear - parseInt(value))
    
}



function question1(selected) {
    questions = document.getElementById('questions');
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
    questions = document.getElementById('questions');
    if (selected == 'mann') {
        model.register.gender = selected;
        questions.innerHTML = `
                            <p class="navigateQuestion">Det er notert 😇. </br> Hva er post-nummeret ditt?</p>
                            <input onchange="getZip(this.value);" class="inputForQuestions" type="text" placeholder="ZIP" /> </br>
                            <button class="registerButtons" onclick="question3()">Gå videre</button>
                          `;
    };

    if (selected == 'kvinne') {
        model.register.gender = selected;
        questions.innerHTML = `
                            <p class="navigateQuestion">Det er notert 😇. </br> Hva er post-nummeret ditt?</p>
                            <input onchange="getZip(this.value);" class="inputForQuestions" type="text" placeholder="ZIP" /> </br>
                            <button class="registerButtons" onclick="question3()">Gå videre</button>
                          `;
    };
};

function question3() {
        questions = document.getElementById('questions');
        questions.innerHTML = `
                            <p class="navigateQuestion">Da skal vi prøve å finne noen i nærheten! Hva er fornavnet ditt?</br></p>
                            <input onchange="getFirstname(this.value);" class="inputForQuestions" type="text" placeholder="Fornavn" /> </br>
                            <button class="registerButtons" onclick="question4()">Gå videre</button>
                          `;
};

function question4() {
    questions = document.getElementById('questions');
    questions.innerHTML = `
                        <p class="navigateQuestion">Så fint navn! Hva er etternavnet ditt?</br></p>
                        <input onchange="getSurname(this.value);" class="inputForQuestions" type="text" placeholder="Etternavn" /> </br>
                        <button class="registerButtons" onclick="question5()">Gå videre</button>
                      `;
};

function question5() {
    questions = document.getElementById('questions');
    questions.innerHTML = `
                        <p class="navigateQuestion">Da er det også notert 😇</br> Når er du født?</p>
                        <input onchange="getDateOfBirth(this.value);" class="inputForQuestions" type="date"/> </br>
                        <button class="registerButtons" onclick="question6()">Gå videre</button>
  `;
};

function question6() {
    questions = document.getElementById('questions');

};