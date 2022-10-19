import { useState } from 'react';
import './App.css';
import Rick from './Components/Img/rick_morty.png'
import Character from './Components/Js/Character';

function App() {

  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='title'> Rick & Morty</h1>

        {characters ?
          (
            <Character
              characters={characters}
              setCharacters={setCharacters} />
          )
          : (
            <>
              <img
                alt='Rick_Morty'
                src={Rick}
                className='img-home' />

              <button
                onClick={reqApi}
                className='btn-search'>
                Buscar Personajes
              </button>
            </>
          )
        }

      </header>
    </div>
  );
}

export default App;
