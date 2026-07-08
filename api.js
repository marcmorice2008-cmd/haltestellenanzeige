async function ladeAbfahrten() {

    const HALTESTELLE = "de:07339:32685";

    try {

        /*
        Hier kommt später die echte TRIAS-Anfrage hin.
        Die Antwort wird danach in unser Anzeigeformat umgewandelt.
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


        return daten;


    } catch(error) {

        console.error(
            "Fehler beim Laden:",
            error
        );

        return [];

    }
}