async function ladeAbfahrten() {

    /*
      Hier kommt später die echte RNN/VRN Live-Abfrage hinein.
      Rückgabeformat für die Anzeige:
      
      [
        {
          linie: "654",
          ziel: "Mainz Hbf",
          zeit: "2 min"
        }
      ]
    */

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
}