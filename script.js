/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    locatie: "AZ Kamer 304",
    stemming: "Klaar voor de strijd",
    bezoek: "Na de operatie"
};

// DEEL 2: Updates
const updates = [
    {
        datum: "18 Februari 2026",
        tijd: "10:36u",
        bericht: `
Nacht 2 van ... zit er op. En het was terug nen goeien.

Gisterennamiddag en -avond niet al te veel last ondervonden van de chemo. Alles is goed verlopen, op een kwartier was het zakske al leeg en mijn maag vol: 
3 potjes ijscrème en nen halve liter koude limonade met ijsblokken. Allemaal broodnodig om de mondslijmvliezen zoveel mogelijk te vrijwaren van de chemo, 
het is namelijk een vaak voorkomend probleem dat de slijmvliezen van het spijsverteringsstelsel kunnen beschadigd raken en dan wordt het wel moeilijk 
om te eten.

Na het deugdoend bezoek van mijn piebe kon ik rustig aan de avond beginnen. Rond 21u iets gekregen tegen de misselijkheid, had toch wat last van 'een zware maag' 
maar kan ook komen door de 4 boterhammen met beleg als avondmaal...

Vandaag staat er niks op het programma dus officieel een rustdag. Focus kan gelegd worden op morgennamiddag: de terugplaatsing van mijn eigen stamcellen.

Spiesse wordt een stukske herboren, wel wel wel...

Laat maar komen, ben er klaar voor!
        `,
        // NIEUW: Meerdere foto's zet je tussen vierkante haken [ ], gescheiden door een komma.
        fotos: [
            "afbeeldingen/cocktail chemo.JPG", 
            "afbeeldingen/calorietjes.JPG"
        ]
    },
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
        // OUDE MANIER (werkt ook nog steeds voor 1 foto):
        fotoUrl: "afbeeldingen/Intake.jpeg"
    },
];

/* ----------------------------------------------------------
   TECHNISCHE LOGICA 
   (Nu met ondersteuning voor meerdere foto's!)
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

        // OPTIE 1: De nieuwe manier (Lijst met foto's)
        if (update.fotos && update.fotos.length > 0) {
            update.fotos.forEach(url => {
                imageHtml += `
                <div class="update-image-container">
                    <img src="${url}" alt="Foto bij update" class="update-image" onerror="this.style.display='none'">
                </div>`;
            });
        } 
        // OPTIE 2: De oude manier (1 fotoUrl) - voor backwards compatibility
        else if (update.fotoUrl) {
            imageHtml = `
                <div class="update-image-container">
                    <img src="${update.fotoUrl}" alt="Foto bij update" class="update-image" onerror="this.style.display='none'">
                </div>
            `;
        }

        // Tekst opmaak met slimme alinea's
        let opgemaaktBericht = "";
        if (update.bericht) {
            let metAlineas = update.bericht.replace(/\n\s*\n/g, '<br><br>');
            opgemaaktBericht = metAlineas.replace(/\n/g, ' ');
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
