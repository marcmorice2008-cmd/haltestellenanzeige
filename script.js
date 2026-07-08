function uhrAktualisieren() {
    const jetzt = new Date();

    document.getElementById("uhr").textContent =
        jetzt.toLocaleTimeString("de-DE");
}

setInterval(uhrAktualisieren, 1000);
uhrAktualisieren();