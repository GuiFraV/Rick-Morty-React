function Character(character){

    return (
        <div>
            <h3>{Character.name}</h3>
            <img src={character.image} alt={character.name} width='300' />
            <p>{`origin: ${character.origin && character.origin.name}`}</p>
        </div>
    )
}

export default Character;