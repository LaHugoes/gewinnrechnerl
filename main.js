let eingabeFelder = ['tfVK','tfEK',]
let preis = [];
let differenz = 0;
let ergebnis;
let aktuelleEingabe;

//ließt textfelder aus und brechnet die Differenz nach eingabenüberprüfung

function tfAuslesen() {

    differenz = 0;
    tfEK = 0;
    tfVK = 0;
    ergebnis = 0;

    //überprüft, dass keine werte davor stehen, mit 0 starten

    for (let i = 0; i < eingabeFelder.length; i = i + 1) {
        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);
        eingabeUeberpruefen(aktuelleEingabe);

        //überprüfung + dass i variable ist

    }

    ergebnis = tfVK - tfEK;

    document.getElementById("ausgabe").innerHTML = ergebnis;
// bei ausgabe wird ergebnis angezeigt

    if (ergebnis < tfEK + 10%tfEK ) {
        document.getElementById("ausgabe").style.color = "red"
    } else {
        if (ergebnis < tfEK + 20%tfEK) {
            document.getElementById("ausgabe").style.color = "purple"
        } else {

            if (ergebnis > tfEK + 20%tfEK) {
                document.getElementById("ausgabe").style.color = "green"
            }
        }
    }//anzeigen der farben bei bestimmten intervall
}
function eingabeUeberpruefen(punkte) {
    if (isNaN(punkte)) {
        console.log("Keine Zahl");
    } else {
        tfVK = tfVK + 1;
        tfEK = tfEK + 1;
        differenz = differenz + punkte;
    }
}
//überprüfung der Zahl bei Differnz