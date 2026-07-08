async function ladeAbfahrten() {

    const HALTESTELLE = "de:07339:32685";

    try {

        const url =
        `https://example-api.de/departures?stop=${HALTESTELLE}`;


        const antwort = await fetch(url);


        if (!antwort.ok) {
            throw new Error("API Fehler");
        }


        const daten = await antwort.json();


        return daten.map(bus => ({

            linie: bus.line,
            ziel: bus.destination,
            zeit: bus.departure

        }));


    } catch (fehler) {

        console.log(
            "Live API nicht erreichbar:",
            fehler
        );


        return [];

    }
}