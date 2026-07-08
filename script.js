const HALTESTELLE = "de:07339:32685";

function uhrAktualisieren() {
document.getElementById("uhr").textContent =
    new Date().toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

setInterval(uhrAktualisieren, 1000);
uhrAktualisieren();


async function abfahrtenLaden() {

    try {
        /*
          Platzhalter für Live-API.
          Hier kommt der RNN/VRN-Datenabruf hinein.
        */

        const daten = [
            {
                linie: "654",
                ziel: "Mainz Hbf",
                zeit: "2 min"
            },
            {
                linie: "630",
                ziel: "Bad Kreuznach Bf",
                zeit: "11 min"
            },
            {
                linie: "653",
                ziel: "Mainz Hbf",
                zeit: "19 min"
            },
            {
                linie: "656",
                ziel: "Nieder-Olm",
                zeit: "27 min"
            }
        ];

        const tabelle = document.querySelector(".tabelle");

        tabelle.innerHTML = `
        <div class="zeile kopfzeile">
            <span>LINIE</span>
            <span>ZIEL</span>
            <span>AB</span>
        </div>
        `;

        daten.forEach(bus => {

            tabelle.innerHTML += `
            <div class="zeile">
                <span>${bus.linie}</span>
                <span>${bus.ziel}</span>
                <span>${bus.zeit}</span>
            </div>
            `;

        });

    }
    catch(e) {
        console.log("Fehler beim Laden", e);
    }
}


abfahrtenLaden();

setInterval(
    abfahrtenLaden,
    30000
);