/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    // Gebruik korte, duidelijke teksten hier
    locatie: "AZ Kamer 304",
    stemming: "Hoopvol & moe",
    bezoek: "Na de operatie"
};

// DEEL 2: Updates met FOTO'S
// BELANGRIJK: Hoofdlettergevoelig! Check je map 'afbeeldingen' op GitHub.
const updates = [
    {
        datum: "18 Februari 2026",
        tijd: "10:30u",
        bericht: "Ik ben geïnstalleerd op de kamer. Het uitzicht is gelukkig best oké! Nu wachten op de eerste onderzoeken. De nieuwe website ziet er alvast een stuk vrolijker uit!",
        // VUL HIERONDER DE EXACTE NAAM IN ZOALS HIJ OP GITHUB STAAT:
            },
    {
        datum: "18 Februari 2026",
        tijd: "08:45u",
        bericht: "Goedemorgen allemaal. Zoals afgesproken met één de verpleegsters me van dichtbij volgen zijn we mooi op om me aan te melden op de afdeling. Omdat de ziekenhuiskoffie net iets minder lekker is beslissen we om onze neus te volgen en samen nog een lekker bakkie koffie te nuttigen in de cafetaria."
        fotoUrl: "afbeeldingen/Intake.jpeg" 
    },
    {
        datum: "17 Februari 2026",
        tijd: "20:00u",
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
    // Let op: de HTML structuur is hier iets aangepast voor de nieuwe ronde iconen
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
            // 'onerror' zorgt dat er geen kapot icoon staat als de foto nog niet geupload is
            imageHtml = `
                <div class="update-image-container">
                    <img src="${update.fotoUrl}" alt="Foto bij update" class="update-image" onerror="this.style.display='none'">
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

