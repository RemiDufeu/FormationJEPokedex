import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

    const [data, setData] = useState(null)

    //chargement des données
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => res.json())
        .then(res => setData(res.results))
    },[])

    //création de la liste des pokemons
    const pokemonList = data == null ? <div>Chargement ...</div> : data.map((pkm, index) => <PokemonCard key={pkm.name} id={index} name={pkm.name}/>)

    // retour de la fonction : le HTML
    return (
        <div style={{textAlign : "center", margin : "auto", maxWidth : "950px"}}>
            <h1>Pokedex</h1>
            <div style={{display : 'flex', justifyContent : "space-between", flexWrap : "wrap"}}>
                { pokemonList }
            </div>
        </div>
    )
}

export default Pokedex
