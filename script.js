/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    locatie: "AZ Ziekenhuis, Kamer 304",
    stemming: "Hoopvol & beetje moe",
    bezoek: "Even wachten tot na de operatie"
};

// DEEL 2: Updates met FOTO'S
// Je kunt nu een regel 'fotoUrl' toevoegen.
// Zorg dat je foto eerst geupload is naar je 'afbeeldingen' map op GitHub.
const updates = [
    {
        datum: "18 Februari 2026",
        tijd: "10:30",
        bericht: "Ik ben geïnstalleerd op de kamer. Het uitzicht is gelukkig best oké! Nu wachten op de eerste onderzoeken.",
        // VORBEELD VAN EEN FOTO TOEVOEGEN:
        // Zorg dat de bestandsnaam exact klopt met wat je uploadt.
        // Als je geen foto hebt, verwijder je deze regel 'fotoUrl' gewoon.
        fotoUrl: "https://github.com/spiesse42/reisdoorquarantaineland/blob/main/afbeeldingen/Intake.jpeg" 
    },
    {
        datum: "18 Februari 2026",
        tijd: "09:00",
        bericht: "Goedemorgen allemaal. Ik ben net aangekomen in het ziekenhuis. De verpleging is hier erg vriendelijk."
        // Deze update heeft geen 'fotoUrl' regel, dus toont hij alleen tekst.
    },
    {
        datum: "17 Februari 2026",
        tijd: "20:00",
        bericht: "De koffer is gepakt! Morgen is de grote dag. Ik ben best zenuwachtig."
    }
];

/* ----------------------------------------------------------
   TECHNISCHE LOGICA (NIET AANPASSEN)
   ----------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    laadStatus();
    laadUpdates();
});

function laadStatus() {
    const statusDiv = document.getElementById('status-display');
    const html = `
        <div class="status-item">
            <span class="status-icon">📍</span> 
            <strong>Locatie:</strong> &nbsp; ${huidigeStatus.locatie}
        </div>
        <div class="status-item">
            <span class="status-icon">😊</span>
            <strong>Gevoel:</strong> &nbsp; ${huidigeStatus.stemming}
        </div>
        <div class="status-item">
            <span class="status-icon">👥</span>
            <strong>Bezoek:</strong> &nbsp; ${huidigeStatus.bezoek}
        </div>
    `;
    statusDiv.innerHTML = html;
}

function laadUpdates() {
    const timelineDiv = document.getElementById('timeline');
    let html = '';

    updates.forEach(update => {
        // We kijken of er een fotoUrl is ingevuld voor deze update
        let imageHtml = '';
        if (update.fotoUrl) {
            imageHtml = `
                <div class="update-image-container">
                    <img src="${update.fotoUrl}" alt="Foto bij update" class="update-image">
                </div>
            `;
        }

        html += `
            <div class="update-card">
                <div class="update-header">
                    <span class="update-date">${update.datum}</span>
                    <span class="update-time">${update.tijd}</span>
                </div>
                <div class="update-text">
                    ${update.bericht}
                </div>
                ${imageHtml}
            </div>
        `;
    });

    timelineDiv.innerHTML = html;
}

