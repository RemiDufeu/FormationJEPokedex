import React from 'react'

const PokemonCard = ({name, id }) => {
    return (
        <div style={{margin : 15, backgroundColor : 'whitesmoke'}}>
            <img width={200} height={200} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`} alt="pokemonSprite"></img>
            <p style={{margin : 0}}>{`N°${id + 1}`}</p>
            <h4 style={{margin : 0, paddingTop : 5, paddingBottom : 15}}>{name}</h4>
        </div>
    )
}

export default PokemonCard
