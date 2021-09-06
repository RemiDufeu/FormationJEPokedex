/** 
window.onload = function () {
    // on selectionne le container Pokedex
    let pokedexContainer = document.querySelector('#pokedex')

    let card = document.createElement("div")
    card.classList.add("card")

    // on créé un élément  "image" et on lui ajoute ses propriétés
    let imgPkm = document.createElement('img')
    imgPkm.width = 200
    imgPkm.height = 200
    imgPkm.alt = "PokemonSprite"

    // On créer le numéro du pokemon
    let idPkm = document.createElement('p')

    // On créer le nom du pokemon
    let nomPkm = document.createElement('h3')
    

    // on récupére la donnée et on l'injecte dans nos éléments
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then(res => res.json())
    .then(function(data) {
        nomPkm.textContent = data.name
        imgPkm.src = data.sprites.front_default
        idPkm.textContent = `N°${data.id}`
    })

    // les éléments sont placés dans la carte
    card.appendChild(imgPkm)
    card.appendChild(idPkm)
    card.appendChild(nomPkm)

    // on place la carte dans le pokedex
    pokedexContainer.appendChild(card)
}
**/
