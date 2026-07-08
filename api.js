async function ladeAbfahrten() {

    const HALTESTELLE = "de:07339:32685";

    console.log(
        "Lade Abfahrten für:",
        HALTESTELLE
    );


    // Test-Rückgabe
    return [
        {
            linie: "654",
            ziel: "Mainz Hbf",
            zeit: "2 min"
        },
        {
            linie: "630",
            ziel: "Bad Kreuznach Bf",
            zeit: "11 min"
        }
    ];
}