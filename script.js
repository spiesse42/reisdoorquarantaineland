/* CONFIGURATIE VOOR SPIESSE
   Pas hieronder de tekst aan om de website te updaten.
*/

// DEEL 1: De statusbalk bovenaan
const huidigeStatus = {
    locatie: "AZ Ziekenhuis, Kamer 304",
    stemming: "Hoopvol & beetje moe",
    bezoek: "Even wachten tot na de operatie" // Bijv: "Welkom tussen 14u-16u"
};

// DEEL 2: De updates
// Tip: Voeg nieuwe updates gewoon bovenaan in de lijst toe.
const updates = [
    {
        datum: "18 Februari 2026",
        tijd: "09:00",
        bericht: "Goedemorgen allemaal. Ik ben net aangekomen in het ziekenhuis. De verpleging is hier erg vriendelijk. Ik installeer me nu en wacht op de dokter voor de laatste briefing."
    },
    {
        datum: "17 Februari 2026",
        tijd: "20:00",
        bericht: "De koffer is gepakt! Morgen is de grote dag. Ik ben best zenuwachtig, maar ook blij dat het eindelijk gaat gebeuren. Ik probeer jullie via deze weg op de hoogte te houden."
    }
];

/* ----------------------------------------------------------
   HIERONDER HOEF JE NIETS AAN TE PASSEN (TECHNISCHE LOGICA)
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
            <span class="status-label">📍 Locatie:</span> ${huidigeStatus.locatie}
        </div>
        <div class="status-item">
            <span class="status-label">😊 Gevoel:</span> ${huidigeStatus.stemming}
        </div>
        <div class="status-item">
            <span class="status-label">👥 Bezoek:</span> ${huidigeStatus.bezoek}
        </div>
    `;
    
    statusDiv.innerHTML = html;
}

function laadUpdates() {
    const timelineDiv = document.getElementById('timeline');
    let html = '';

    // We lopen door de updates lijst heen
    updates.forEach(update => {
        html += `
            <div class="update-card">
                <div class="update-header">
                    <span class="update-date">${update.datum}</span>
                    <span class="update-time">${update.tijd}</span>
                </div>
                <div class="update-text">
                    ${update.bericht}
                </div>
            </div>
        `;
    });

    timelineDiv.innerHTML = html;
}