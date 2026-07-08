async function ladeAbfahrten() {

    const HALTESTELLE = "de:07339:32685";

    try {

        // Hier kommt später der echte API-Aufruf
        const antwort = await fetch(
            `/api/abfahrten?stop=${HALTESTELLE}`
        );


        if (!antwort.ok) {
            throw new Error("Keine Daten");
        }


        const daten = await antwort.json();


        return daten
            .filter(bus => bus.typ === "BUS")
            .map(bus => ({

                linie: bus.linie,
                ziel: bus.ziel,
                zeit: bus.zeit,
                verspaetung: bus.verspaetung || 0

            }));


    } catch(error) {

        console.error(
            "Live-Daten Fehler:",
            error
        );

        return [];

    }
}