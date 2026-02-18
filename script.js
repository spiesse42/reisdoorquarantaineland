/* CONFIGURATIE VOOR SPIESSE */

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
het is namelijk een vaak voorkomend probleem dat de slijmvliezen van het spijsverteringsstelsel kunnen beschadigd raken en dan wordt het wel moeilijk
om te eten.

Na het deugdoend bezoek van mijn piebe kon ik rustig aan de avond beginnen. Rond 21u iets gekregen tegen de misselijkheid, had toch wat last van 'een zware maag'
maar kan ook komen door de 4 boterhammen met beleg als avondmaal...

Vandaag staat er niks op het programma dus officieel een rustdag. Focus kan gelegd worden op morgennamiddag: de terugplaatsing van mijn eigen stamcellen.

Spiesse wordt een stukske herboren, wel wel wel...

Laat maar komen, ben er klaar voor!
        `,
        // NIEUW SYSTEEM: Meerdere foto's in een lijstje
        // Zorg dat je bestandsnamen op GitHub GEEN SPATIES hebben (bv. "cocktail.jpg" ipv "cocktail chemo.jpg")
        fotos: [
            "afbeeldingen/chemo.JPG", 
            "afbeeldingen/calorietjes.JPG"
        ]
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
        `
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

Zo ben je vlug patiënt, nou nou. Deze namiddag nog een zenuw- en spieronderzoek om al dan niet zenuwschade door behandeling te laten vaststellen.

Op naar het volgende zou ik zeggen...
        `,
        // OUDE SYSTEEM (werkt ook nog):
        fotoUrl: "afbeeldingen/centrale_catheter.JPG"
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
    }
];

/* ----------------------------------------------------------
   TECHNISCHE LOGICA (Hier gebeurt de magie)
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
        
        // FOTO LOGICA: We verzamelen alle foto's in één lijstje
        let alleFotos = [];
        if (update.fotos && update.fotos.length > 0) {
            alleFotos = update.fotos;
        } else if (update.fotoUrl) {
            alleFotos = [update.fotoUrl];
        }

        // We bouwen de HTML voor de foto's (als tegels)
        let fotoHtml = '';
        if (alleFotos.length > 0) {
            fotoHtml = '<div class="gallery-grid">'; // Start rooster
            alleFotos.forEach(url => {
                // We geven de foto de klasse 'gallery-item' zodat de CSS hem klein maakt
                fotoHtml += `
                    <img src="${url}" 
                         alt="Foto update" 
                         class="gallery-item" 
                         onclick="openLightbox('${url}')"
                         onerror="this.style.display='none'">
                `;
            });
            fotoHtml += '</div>'; // Einde rooster
        }

        // Tekst opmaak
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
                ${fotoHtml}
            </div>
        `;
    });

    timelineDiv.innerHTML = html;
}

// Functies voor de grote foto weergave
function openLightbox(url) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = "block";
    lightboxImg.src = url;
}

function sluitLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

