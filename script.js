/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    locatie: "AZ Kamer 304",
    stemming: "Hoopvol & moe",
    bezoek: "Na de operatie"
};

// DEEL 2: Updates
// BELANGRIJK:
// 1. Tussen elk blokje { ... } moet een KOMMA staan!
// 2. Gebruik de ` (backtick) voor tekst.
// 3. Foto namen moeten EXACT kloppen (hoofdlettergevoelig).

const updates = [
    {
        datum: "18 Februari 2026",
        tijd: "10:30",
        bericht: `
Ik ben geïnstalleerd op de kamer. Het uitzicht is gelukkig best oké! 

Nu is het wachten op de eerste onderzoeken. De verpleging komt zo langs voor de bloeddruk.

De nieuwe website ziet er alvast een stuk vrolijker uit!
        `,
        // Zorg dat je map op GitHub 'afbeeldingen' heet (kleine letters)
        // En dat je foto exact zo heet (bv. .jpg of .JPG of .jpeg)
        fotoUrl: "afbeeldingen/kamer.jpg" 
    }, // <--- VERGEET DEZE KOMMA NIET als er nog een update volgt!
    {
        datum: "18 Februari 2026",
        tijd: "09:00",
        bericht: `
Goedemorgen allemaal. 
Ik ben net aangekomen in het ziekenhuis. De verpleging is hier erg vriendelijk.
        `
        // Geen foto hier, dat mag.
    }, // <--- VERGEET DEZE KOMMA NIET
    {
        datum: "17 Februari 2026",
        tijd: "20:00",
        bericht: "De koffer is gepakt! Morgen is de grote dag. Ik ben best zenuwachtig."
    }
];

/* ----------------------------------------------------------
   TECHNISCHE LOGICA (MET EXTRA BEVEILIGING)
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
            <div class="status-icon">📍</div> 
            <div><strong>Locatie:</strong><br> ${huidigeStatus.locatie}</div>
        </div>
        <div class="status-item">
            <div class="status-icon">🤞</div>
            <div><strong>Gevoel:</strong><br> ${huidigeStatus.stemming}</div>
        </div>
        <div class="status-item">
            <div class="status-icon">👥</div>
            <div><strong>Bezoek:</strong><br> ${huidigeStatus.bezoek}</div>
        </div>
    `;
    statusDiv.innerHTML = html;
}

function laadUpdates() {
    const timelineDiv = document.getElementById('timeline');
    
    // Check of timelineDiv wel bestaat (veiligheid)
    if (!timelineDiv) return;

    let html = '';

    updates.forEach(update => {
        let imageHtml = '';
        if (update.fotoUrl) {
            // We voegen een 'onerror' toe: als de foto niet gevonden wordt (foute naam),
            // verbergt hij het plaatje in plaats van een lelijk icoon te tonen.
            imageHtml = `
                <div class="update-image-container">
                    <img src="${update.fotoUrl}" alt="Foto bij update" class="update-image" onerror="this.style.display='none'">
                </div>
            `;
        }

        // BEVEILIGING: Als bericht leeg is of niet bestaat, crasht de site niet meer.
        let opgemaaktBericht = "";
        if (update.bericht) {
             opgemaaktBericht = update.bericht.replace(/\n/g, '<br>');
        }

        html += `
            <div class="update-card">
                <div class="update-header">
                    <span class="update-date">${update.datum}</span>
                    <span class="update-time">${update.tijd}</span>
                </div>
                <div class="update-text">
                    ${opgemaaktBericht}
                </div>
                ${imageHtml}
            </div>
        `;
    });

    timelineDiv.innerHTML = html;
}
