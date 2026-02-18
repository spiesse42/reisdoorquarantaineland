u/* CONFIGURATIE VOOR SPIESSE */

// DEEL 1: Status
const huidigeStatus = {
    locatie: "AZ Delta kamer 510",
    stemming: "Hoopvol & chemotioneel",
    bezoek: "14u tot 20u"
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
het is namelijk een vaak voorkomend probleem dat de slijmvliezen van het spijsverteringsstelsel kunnen beschadigd rakenn en dan wordt het wel moeilijk
om te eten.

Na het deugdoend bezoek van mijn piebe kon ik rustig aan de avond beginnen. Rond 21u iets gekregen tegen de misselijkheid, had toch wat last van 'een zware maag'
maar kan ook komen door de 4 boterhammen met beleg als avondmaal...

Vandaag staat er niks op het programma dus officieel een rustdag. Focus kan gelegd worden op morgennamiddag: de terugplaatsing van mijn eigen stamcellen.

Spiesse wordt een stukske herboren, wel wel wel...

Laat maar komen, ben er klaar voor!
       `,
        fotoUrl: "afbeeldingen/cocktail chemo.JPG"
       `,
       fotoUrl: "afbeeldingen/calorietjes.JPG"

    }, 
    {
        datum: "17 Februari 2026",
        tijd: "05:00u",
        bericht: `
Nacht 1 van ... zit er op. De kortheid van de nacht heeft niet moeten onderdoen aan hoe ik geslapen heb. Redelijke nacht gehad, mede dankzij
mijn eigen hoofdkussen en het ontbreken van een snurkende gebuur.

Binnen een paar uur begint de aftelklok echt wel dicht bij 11u te komen. Belangrijk moment 1 van 2 staat dan op den agenda: 1 zware cocktail om
mijne binnenkant voor te bereiden (lees: kapot te maken) zodat de stamcellen vanaf donderdag hun werk kunnen beginnen doen.

Laat maar komen, ben er klaar voor!
        `,

    }, 
{
        datum: "16 Februari 2026",
        tijd: "10:45u",
        bericht: `
De eerste acties van de dag zijn ook al achter de rug.

5 minuten nadat we begonnen waren om al mijn gerief uit te stallen (jaja, kaders van vrouw en kids en een heuse "Quarantaine Reismap"
vol dagelijkse opdrachten om de verveling tegen te gaan. Echt een héél mooi cadeau van Zoë, Lander en Petra!) mocht ik al plaatsnemen in mijn bed.
Verpleegster 1 trok bloed terwijl verpleegster 2 de parameters nam.

Na een klein half uur mocht ik dan naar 'beneden', naar het operatiekwartier. Daar werd de centrale catheter gestoken net onder mijn sleutelbeen
om daar dan de chemo op aan te sluiten morgen & de stamcellen ook via deze weg ook terug te kunnen geven.

Zo ben je vlug patiënt, nou nou. Deze namiddg nog een zenuw- en spieronderzoek om al dan niet zenuwschade door behandeling te laten vaststellen.

Op naar het volgende zou ik zeggen...
        `,
        fotoUrl: "afbeeldingen/centrale catheter.JPG"
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
        fotoUrl: "afbeeldingen/Intake.jpeg"
    },
    // HIERONDER KAN JE EEN NIEUWE UPDATE TOEVOEGEN:
    /*
    
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





