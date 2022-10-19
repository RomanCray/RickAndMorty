import React from 'react'

export default function Character(props) {
    const { characters, setCharacters } = props;

    const restCharacters = (e) => {
        e.preventDefault();
        setCharacters(null);
    };

    console.log(characters);
    return (
        <div className='characters'>
            <div className='pruebaJ'>
                <h2>Personajes</h2>
                <button className='back-home' onClick={restCharacters}>Volver</button>
            </div>
            <div className='container-characters'>
                {characters.map((character, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img alt={character} src={character.image} />
                        </div>
                        <div>
                            <h3>
                                {character.name}
                            </h3>
                            <h6>
                                {character.status === 'Alive' ?
                                    (
                                        <>
                                            <span
                                                className='alive' />Alive
                                        </>
                                    )
                                    : (
                                        <>
                                            <span
                                                className='dead' />Dead
                                        </>
                                    )
                                }
                            </h6>
                            <p>
                                <span className='text-grey'> Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'> Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='back-home' onClick={restCharacters}>Volver</button>
        </div>
    )
}
