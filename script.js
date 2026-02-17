/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    locatie: "AZ Kamer 304",
    stemming: "Hoopvol & moe",
    bezoek: "Na de operatie"
};

// DEEL 2: Updates
// BELANGRIJK: Gebruik nu de ` (backtick) in plaats van " (aanhalingsteken) bij het bericht.
// Hierdoor kan je in de code gewoon op Enter drukken voor een nieuwe regel.

const updates = [
    {
        datum: "18 Februari 2026",
        tijd: "10:30",
        // HIERONDER ZIE JE HET VOORBEELD MET DE BACKTICKS (`):
        bericht: `
Ik ben geïnstalleerd op de kamer. Het uitzicht is gelukkig best oké! 

Nu is het wachten op de eerste onderzoeken. De verpleging komt zo langs voor de bloeddruk.

De nieuwe website ziet er alvast een stuk vrolijker uit!
        `,
        // fotoUrl: "afbeeldingen/jouw-foto.jpg" 
    },
    {
        datum: "18 Februari 2026",
        tijd: "09:00",
        bericht: `
Goedemorgen allemaal. 
Ik ben net aangekomen in het ziekenhuis. De verpleging is hier erg vriendelijk.
        `
    },
    {
        datum: "17 Februari 2026",
        tijd: "20:00",
        bericht: "De koffer is gepakt! Morgen is de grote dag. Ik ben best zenuwachtig."
    }
];

/* ----------------------------------------------------------
   TECHNISCHE LOGICA (AANGEPAST VOOR WITREGELS)
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
    let html = '';

    updates.forEach(update => {
        let imageHtml = '';
        if (update.fotoUrl) {
            imageHtml = `
                <div class="update-image-container">
                    <img src="${update.fotoUrl}" alt="Foto bij update" class="update-image" onerror="this.style.display='none'">
                </div>
            `;
        }

        // NIEUW: We vervangen de 'Enters' in jouw tekst door HTML <br> tags
        // Zo verschijnen de alinea's ook echt op de website.
        let opgemaaktBericht = update.bericht.replace(/\n/g, '<br>');

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
