/*
BONUS 2:
organizzare i singoli membri in card/schede

BONUS 3:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

Consigli del giorno:
โ Ragioniamo come sempre a step.
โ Prima la logica in italiano e poi traduciamo in codice.
โ console.log() รจ nostro amico.Buon lavoro!
*/

// Codice fornito
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

let teamContainer = document.querySelector(".team-container");
let userInfo = "";
for (let i = 0; i < team.length; i++) {
    userInfo = team[i];
    cardMaker();
}

const addBtn = document.getElementById("addMemberButton");

addBtn.addEventListener("click",
    function () {
        let addName = document.getElementById("name").value;
        let addRole = document.getElementById("role").value;
        let addImage = document.getElementById("image").value;

        const addedObject = {
            name : addName,
            role : addRole,
            image : addImage
        }

        // Manda il nuovo membro aggiunto nel team
        team.push(addedObject);
        console.log(team);

        // Pulisce il team container
        teamContainer.innerHTML = "";

        // Ripeto il ciclo cosi da includere il nuovo membro
        for (let i = 0; i < team.length; i++) {
            userInfo = team[i];
            cardMaker();
        }
    }
);

// FUNCTIONS

/*
Descrizione:
    * creare un div a cui dรฒ la classe "team-card"
        - creare un div all'interno a cui dรฒ la classe "card-image"
            - creare l'img dell'utente
        /

        - creare un div con classe "card-text"
            - creare un h3 con id userName
            - creare un p con id userRole
        /
    /

    * appendere il div principale al div con classe "team-container":
*/
function cardMaker() {

    // Card
    let divTeamCard = document.createElement("div");
    divTeamCard.classList.add("team-card");

    // div dell'immagine nella card
    let divCardImage = document.createElement("div");
    divCardImage.classList.add("card-image");
    divTeamCard.append(divCardImage);
    // Immagine nella card
    let cardImage = document.createElement("div");
    cardImage.innerHTML = `<img src="../img/${userInfo.image}">`;
    divCardImage.append(cardImage);

    // div testo della card
    let divCardText = document.createElement("div");
    divCardText.classList.add("card-text")
    divTeamCard.append(divCardText);
    // testo h3 nella card
    let cardText = document.createElement("h3");
    cardText.innerHTML = userInfo.name;
    divCardText.append(cardText);
    // test p nella card
    let cardSubText = document.createElement("p");
    cardSubText.innerHTML = userInfo.role;
    divCardText.append(cardSubText);

    teamContainer.append(divTeamCard);
}