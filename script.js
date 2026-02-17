/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    locatie: "AZ Kamer 304",
    stemming: "Hoopvol & moe",
    bezoek: "Na de operatie"
};

// DEEL 2: Updates
const updates = [
    {
        datum: "16 Februari 2026",
        tijd: "08:45u",
        bericht: `
Goedemorgen allemaal. 
Ik ben net aangekomen in het ziekenhuis, mooi op tijd om me tegen 9u aan te melden op de afdeling Hematologie. Omdat we alletwee weten dat de ziekenhuiskoffie net 
iets minder lekker is dan deze thuis beslissen we om onze neus te volgen en nog rap een koffieke te gaan drinken in de cafetaria. Slurp slurp en hop naar verdieping 2. 

Gepakt & gezakt gelijk 2 muilezels konden we dan vertrekken richting verdieping 2. De verpleegster stond ons al op te wachten aan de schuifdeur, klaar om ons naar
mijn buitenverblijf te begeleiden. Zon, zee en strand wordt het niet helaas. 24 graden en droog, dat wel voor de komende weken.

Op naar de installatie van de kamer en hetgeen daarop volgt.
        `,
        fotoUrl: "afbeeldingen/Intake.jpeg"
    },
    // HIERONDER KAN JE EEN NIEUWE UPDATE TOEVOEGEN:
    /*
    {
        datum: "...",
        tijd: "...",
        bericht: `...`,
    } 
    */
];

/* ----------------------------------------------------------
   TECHNISCHE LOGICA 
   (Hier zit de 'slimme motor' die je tekst mooi maakt)
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
    if (!timelineDiv) return;

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

        // --- HIER ZIT DE OPLOSSING ---
        let opgemaaktBericht = "";
        if (update.bericht) {
            // Stap 1: Dubbele enters (witregels) worden échte alinea's (<br><br>)
            let metAlineas = update.bericht.replace(/\n\s*\n/g, '<br><br>');
            
            // Stap 2: Enkele enters (die jij gebruikt voor leesbaarheid) worden spaties
            opgemaaktBericht = metAlineas.replace(/\n/g, ' ');
        }
        // -----------------------------

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
