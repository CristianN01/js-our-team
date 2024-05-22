// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

// creo la mia array di oggetti.
const ourTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]
// Li stampo in console.
for (const key in ourTeam) {
    console.log( key,':', ourTeam[key])
}

// seleziono la section dove verra stampato il mio array.
const cardContainer = document.querySelector('section.articles')

 // funzione che crea un article, in base alla lunghezza della nostra array in questo caso 6, con aggiunta della classe card, per poi aggiungerli alla section nel nostro DOM.

for (let index = 0; index < ourTeam.length; index++) {
     const cards = document.createElement('article')
     cards.classList.add('card')
     cardContainer.appendChild(cards)
     cards.append(ourTeam[index].nome)
     cards.append(ourTeam[index].ruolo)
     cards.append(ourTeam[index].foto)    
}







