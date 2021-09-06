
window.onload = function () {
    // on selectionne le container Pokedex
    let pokedexContainer = document.querySelector('#pokedex')


    // on récupére la donnée et on créé les éléments depuis la réponse
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => res.json())
    .then(function(data) {
        data.results.forEach((pokemon,index) => {
            buildCard(pokedexContainer, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` , index + 1, pokemon.name )
        });
    })

}

function buildCard(container, spriteUrl, id, nom) {
    
    let card = document.createElement("div")
    card.classList.add("card")

    // on créé un élément  "image" et on lui ajoute ses propriétés
    let imgPkm = document.createElement('img')
    imgPkm.width = 200
    imgPkm.height = 200
    imgPkm.alt = "PokemonSprite"
    imgPkm.src = spriteUrl

    // On créer le numéro du pokemon
    let idPkm = document.createElement('p')
    idPkm.textContent = `N°${id}`

    // On créer le nom du pokemon
    let nomPkm = document.createElement('h3')
    nomPkm.textContent = nom

    //la carte est rempli
    card.appendChild(imgPkm)
    card.appendChild(idPkm)
    card.appendChild(nomPkm)

    container.appendChild(card)

}