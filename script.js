// Opprette et Flyttbart Element
// Hei, JavaScript-entusiaster!

// I denne oppgaven skal vi utforske den praktiske siden av JavaScript ved å lage et flyttbart HTML-element. Oppgaven er å gjøre det mulig for elementet å bevege seg fritt rundt nettleservinduet. Spesifikasjonene er  som følger:

// Funksjonalitet:
// Navigering med piltaster: Implementer muligheten til å flytte elementet i fire retninger – opp, ned, venstre og høyre – ved hjelp av piltastene.
// Klikk for å posisjonere: Tillat brukeren å flytte elementet direkte ved å klikke hvor som helst på siden.
// Forbli synlig: Sørg for at elementet holder seg innenfor den synlige skjermflaten.
// Implementeringstips:
// Bruk addEventListener() for å fange opp hendelser fra piltaster og museklikk.
// Bruk position: absolute for å gi elementet full bevegelsesfrihet.

// Valgfrie utfordringer:
// Du kan forbedre implementeringen med følgende tillegg:

// Implementer kollisjonsdeteksjon eller legg til hindringer for ekstra kompleksitet.
// Styling:
// Selv om hovedfokuset er på funksjonalitet, kan du style elementet etter eget ønske. Denne oppgaven gjør seg godt i en portfolio så ta deg litt tid og gjør siden presentabel.

// Kort oppsumert:
// Sett opp event listeners som fanger opp piltaster og museklikk.
// Implementer logikk for å oppdatere elementets posisjon basert på registrerte events.
// Legg eventuelt til ekstra funksjoner eller begrensninger for å gjøre oppgaven mer utfordrende.
// Husk, målet med denne øvelsen er å styrke din forståelse av event listeners  og manipulering av HTML-elementer ved hjelp av JavaScript.

// Husk at ryddig og velorganisert kode gjør det lettere å holde oversikt over alle komponentene! Hvis du trenger å bruke en løkke, bruk anledningen til å øve på de avanserte array-metodene vi har gått gjennom.

// Husk også å aktivere GitHub Pages for innleveringen din.

// Lykke til med kodeeventyret ditt! 🎉
const draggableElement = document.getElementById("draggable");
let posX = 0;
let posY = 0;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      posY -= 10;
      break;
    case "ArrowDown":
      posY += 10;
      break;
    case "ArrowLeft":
      posX -= 10;
      break;
    case "ArrowRight":
      posX += 10;
      break;
  }
  updatePosition();
});

document.addEventListener("click", (event) => {
  posX = event.clientX;
  posY = event.clientY;
  updatePosition();
});

function updatePosition() {
  draggableElement.style.transform = `translate(${posX}px, ${posY}px)`;
  // Initial position
  updatePosition();
  // Ensure the element stays within the viewport
  const rect = draggableElement.getBoundingClientRect();
  if (rect.top < 0) posY = 0;
  if (rect.left < 0) posX = 0;
  if (rect.bottom > window.innerHeight) posY = window.innerHeight - rect.height;
  if (rect.right > window.innerWidth) posX = window.innerWidth - rect.width;
}
