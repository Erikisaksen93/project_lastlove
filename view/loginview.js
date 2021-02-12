function loginView() {
    document.getElementById('app').innerHTML = `
        <button>Registrer ny bruker</button>
        <div>
            <div>
                <h3>E-postadresse</h3>
                <input type="text">
            </div>
            <div>
                <h3>Passord</h3>
                <input type="text">
            </div>
            <button>Log inn</button>
        </div>
    `;
}