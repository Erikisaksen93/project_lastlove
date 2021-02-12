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

const getEmail = (value) => {
    model.register.email = value;
}

const getPassord = (value) => {
    model.register.userpassword = value;
}

const goBack = () => {
    questions = document.getElementById('questions');
    questions.innerHTML = `
                            <p class="navigateQuestion">
                                Hva leter du etter?
                            </p>
                            <button class="registerButtons" onclick="question1('mann')">Jeg leter etter en mann</button> </br>
                            <button class="registerButtons" onclick="question1('kvinne')">Jeg leter etter en kvinne</button>
                            `;

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

    if (model.register.age >= 60) {
    questions.innerHTML = `
                        <p class="navigateQuestion">Du har fortsatt mange fine år igjen!</br> Hva er e-posten din?</br> Dette blir du å logge inn med</p>
                        <input onchange="getEmail(this.value);" class="inputForQuestions" type="text"/> </br>
                        <button class="registerButtons" onclick="question7()">Gå videre</button>
                        `;
    } else {
    questions.innerHTML = `
                        <p class="navigateQuestion">Denne siden er for personer som er 60 eller eldre. </br>Du er hjertelig velkommen tilbake </br> når du har fylt 60 😃</p>
                        `;
                        
    }
};

function question7() {
    questions = document.getElementById('questions');
    questions.innerHTML = `
                        <p class="navigateQuestion">Velg et passord</br> Skriv det gjerne ned på papir så du husker</p>
                        <input onchange="getPassword(this.value);" class="inputForQuestions" type="password"/> </br>
                        <button class="registerButtons" onclick="loginView()">Logg inn</button>
                        `;


}